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



// import { Injectable } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';


// @Injectable({
//   providedIn: 'root'
// })
// export class TranslationService {

//   constructor(private translate:TranslateService){}
//   switchLang(lang:string) {
//     this.translate.use(lang);
//     document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

//   }
  // public locale!:string;
  // constructor(private translate: TranslateService) { }
  // public setDefaultLocale():void{
  //   this.locale = navigator.language || 'en'
  //   this.translate.setDefaultLang(this.locale)
  //   this.translate.use(this.locale)
  // }

  // public setLocale(lang:string):void{
  //   this.translate.setDefaultLang(lang)
  //   this.translate.use(lang)
  //   this.locale = lang
  // }

  // public getLocale(): string {
  //   return this.locale
  // }
//}
