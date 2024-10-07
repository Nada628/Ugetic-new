import { Component, HostListener, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/Services/local-storage.service';
import { TranslationService } from 'src/app/Services/translate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarScrolled = false;
  currentLanguageImage!: string;
  logo = '../../../assets/images/home/ugitech--logo-02.png';  // Default logo

  constructor(
    private translationService: TranslationService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    const lang = this.localStorageService.getItem('lang') || 'en';
    this.setLanguageImage(lang);
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
}
