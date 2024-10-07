import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslationService } from 'src/app/Services/translate.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentIconClass: string = 'fa-solid fa-arrow-right';
  private langChangeSubscription: Subscription | undefined;

  constructor(
    private translationService: TranslationService
  ) {}

  ngOnInit(): void {
    const lang = this.translationService.getCurrentLang();
    this.setIconClass(lang);

    this.langChangeSubscription = this.translationService.languageChanged.subscribe((newLang: string) => {
      this.setIconClass(newLang);
    });
  }

  private setIconClass(lang: string) {
    const iconClasses: { [key: string]: string } = {
      'en': 'fa-solid fa-arrow-right', 
      'ar': 'fa-solid fa-arrow-left'   
    };
    this.currentIconClass = iconClasses[lang];
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
  dots: number[] = Array(25).fill(0);
}
