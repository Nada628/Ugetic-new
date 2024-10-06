import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  currentSlide = 0;
  totalSlides = 6; 
  visibleSlides = 3; 
  dots = new Array(this.totalSlides / this.visibleSlides).fill(0); // لعدد النقاط

  prevSlide() {
    this.currentSlide = (this.currentSlide === 0) ? this.totalSlides - this.visibleSlides : this.currentSlide - 1;
    this.updateSlider();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide >= this.totalSlides - this.visibleSlides) ? 0 : this.currentSlide + 1;
    this.updateSlider();
  }

  updateSlider() {
    const sliderTrack = document.querySelector('.slider-track') as HTMLElement;
    sliderTrack.style.transform = `translateX(-${this.currentSlide * (100 / this.visibleSlides)}%)`;
  }
}
