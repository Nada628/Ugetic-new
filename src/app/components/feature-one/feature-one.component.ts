import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-feature-one',
  templateUrl: './feature-one.component.html',
  styleUrls: ['./feature-one.component.css']
})
export class featureOneComponent implements OnInit{
  ngOnInit(): void {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }
}
