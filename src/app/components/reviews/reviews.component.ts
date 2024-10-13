import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  currentSlide = 0;
  totalSlides = 6; 
  visibleSlides = 3; 
  dots = new Array(this.totalSlides / this.visibleSlides).fill(0); // لعدد النقاط

  ngOnInit() {
    this.checkScreenSize(); // Set the visible slides based on screen size on load
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize(); // Adjust slides on screen resize
  }

  checkScreenSize() {
    if (window.innerWidth <= 768) {
      this.visibleSlides = 1; // Show only 1 slide on mobile
    } else {
      this.visibleSlides = 3; // Default to 3 slides on larger screens
    }
    this.updateSlider();
  }

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
