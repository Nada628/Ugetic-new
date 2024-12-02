import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit{
  @ViewChild('about') aboutSection: ElementRef | undefined;
  
  ngOnInit(): void {
    AOS.init({
      duration: 600,
      once: false,
    });
  }

  scrollToAbout() {
    if (this.aboutSection) {
      this.aboutSection.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
