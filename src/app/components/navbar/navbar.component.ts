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
  placeholderText: string = ' ما الذي تبحث عنه ؟ ...';
  isTyping = false; 
  currentPlaceholder: string = '';
  currentIndex: number = 0;
  typingSpeed: number = 80; 
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

  }

  
  animatePlaceholder(): void {
    this.isTyping = true;
    if (this.currentIndex < this.placeholderText.length) {
      this.currentPlaceholder += this.placeholderText.charAt(this.currentIndex);
      this.currentIndex++;
      this.cdr.detectChanges();
      setTimeout(() => this.animatePlaceholder(), this.typingSpeed);
    } else {
      // Stop typing and clear the placeholder after a short delay
      setTimeout(() => {
        this.isTyping = false; // End typing state
        this.currentPlaceholder = ''; // Allow user input
        this.cdr.detectChanges();
      }, 1000); // Adjust the delay before clearing as needed
    }
  }
  
  clearPlaceholder(): void {
    if (!this.isTyping) {
      this.currentPlaceholder = '';
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
      this.logo = '../../../assets/images/home/logoblack.png'; 
    } else {
      this.navbarScrolled = false;
      this.logo = '../../../assets/images/home/ugitech--logo-02.png';
    }
  }

  ngOnDestroy() {
    document.removeEventListener('click', this.onDocumentClick);
  }

  toggleSearchBox(event: MouseEvent) {
    event.stopPropagation();
  
    if (this.isSearchBoxVisible) {
      this.isExpanded = false;
  
      setTimeout(() => {
        this.isSearchBoxVisible = false;
      }, 1000); // Duration should match the transition time in CSS
      return; 
    }
  
    this.isSearchBoxVisible = true; 
    this.isExpanded = false; 
    this.currentPlaceholder = ''; 
    this.currentIndex = 0; 
    this.isTyping = false; 
  
    // Clear any previous timeout to prevent multiple expansions
    if (this.expandTimeout) {
      clearTimeout(this.expandTimeout);
    }
  
   // Set a timeout to expand the input width after 1 second
   this.expandTimeout = setTimeout(() => {
    this.isExpanded = true;

    // Delay 
    setTimeout(() => {
      this.animatePlaceholder(); 
    }, 1000);  //delay for start the placeholder
  }, 1000); // Initial expand delay
}

  

  onDocumentClick = (event: MouseEvent) => {
    if (this.isSearchBoxVisible && !(event.target instanceof HTMLInputElement)) {
      this.isSearchBoxVisible = false;
      this.isExpanded = false;
      clearTimeout(this.expandTimeout);
    }
  }
}
