import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit{
  ngOnInit(): void {
    AOS.init({
      duration: 600,
      once: false,
    });
  }
}
