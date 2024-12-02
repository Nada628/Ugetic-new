import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLang = new BehaviorSubject<string>('ar'); // Default language
  languageChanged = this.currentLang.asObservable();

  constructor(private translate: TranslateService) {}

  switchLang(lang: string): void {
    this.translate.use(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    this.currentLang.next(lang); // Emit the new language to subscribers
  }

  getCurrentLang(): string {
    return this.currentLang.getValue(); // Safely access the current language value
  }
}




