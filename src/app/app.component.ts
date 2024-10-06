import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { LocalStorageService } from './Services/local-storage.service';
import { TranslationService } from './Services/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lang =  this.localStorageService.getItem('lang')
  constructor(private localStorageService: LocalStorageService, private translationService: TranslationService) { }

  ngOnInit() {
    AOS.init({
      duration: 1200,
    });
    this.translationService.switchLang(this.lang)
  }

}

