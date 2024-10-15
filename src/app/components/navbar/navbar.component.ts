import { Component, HostListener, OnDestroy, OnInit,ChangeDetectorRef } from '@angular/core';
import { LocalStorageService } from 'src/app/Services/local-storage.service';
import { TranslationService } from 'src/app/Services/translate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  navbarScrolled = false;
  currentLanguageImage!: string;
  placeholderText: string = 'Search...';
  currentPlaceholder: string = '';
  currentIndex: number = 0;
  typingSpeed: number = 100; // Speed of typing 
  isSearchBoxVisible = false; 
  isExpanded = false; 
  expandTimeout: any; 
  logo = '../../../assets/images/home/ugitech--logo-02.png';  

  constructor(
    private translationService: TranslationService,
    private localStorageService: LocalStorageService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    document.addEventListener('click', this.onDocumentClick);
    const lang = this.localStorageService.getItem('lang') || 'en';
    this.setLanguageImage(lang);
    console.log('Component initialized.');
    this.animatePlaceholder();

  }

  animatePlaceholder(): void {
    console.log('Animating placeholder:', this.currentPlaceholder);
    if (this.currentIndex < this.placeholderText.length) {
      this.currentPlaceholder += this.placeholderText.charAt(this.currentIndex);
      this.currentIndex++;
      console.log('Current Index:', this.currentIndex, 'Current Placeholder:', this.currentPlaceholder);

      // Manually detect changes after each update
      this.cdr.detectChanges();

      setTimeout(() => this.animatePlaceholder(), this.typingSpeed);
    } else {
      console.log('Typing animation completed.');
    }
  }

  transalte(lang: string) {
    this.translationService.switchLang(lang);
    this.localStorageService.setItem('lang', lang);
    this.setLanguageImage(lang);
  }

  private setLanguageImage(lang: string) {
    const languageImages: { [key: string]: string } = {
      'en': '../../../assets/icons/Flag_of_the_United_Kingdom.svg.png',
      'ar': '../../../assets/icons/world.png'
    };
    this.currentLanguageImage = languageImages[lang];
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 50) {
      this.navbarScrolled = true;
      this.logo = '../../../assets/images/home/logoblack.png'; // Scrolled logo
    } else {
      this.navbarScrolled = false;
      this.logo = '../../../assets/images/home/ugitech--logo-02.png'; // Default logo
    }
  }

  ngOnDestroy() {
    // Clean up the event listener
    document.removeEventListener('click', this.onDocumentClick);
  }

  toggleSearchBox(event: MouseEvent) {
    console.log('Search box toggled'); // Debug line

    // Prevent the click event from bubbling up to the document
    event.stopPropagation();

    // If the search box is already visible, hide it
    if (this.isSearchBoxVisible) {
      this.isSearchBoxVisible = false;
      this.isExpanded = false; // Optionally reset the width
      clearTimeout(this.expandTimeout); // Clear the timeout if it's running
      return; // Exit early
    }

    // Show the search box immediately
    this.isSearchBoxVisible = true; 
    this.isExpanded = false; // Set initial width to 45px

    // Clear any previous timeout to prevent multiple expansions
    if (this.expandTimeout) {
      clearTimeout(this.expandTimeout);
    }

    // Set a timeout to expand the input width after 2 seconds
    this.expandTimeout = setTimeout(() => {
      this.isExpanded = true; 
    }, 1000); // Changed to 2000ms as per your request
  }

  onDocumentClick = (event: MouseEvent) => {
    // If the search box is visible, hide it when clicking outside
    if (this.isSearchBoxVisible && !(event.target instanceof HTMLInputElement)) {
      this.isSearchBoxVisible = false;
      this.isExpanded = false; // Optionally reset the width
      clearTimeout(this.expandTimeout); // Clear the timeout if it's running
    }
  }
}
