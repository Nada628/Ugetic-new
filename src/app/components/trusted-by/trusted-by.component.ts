import { Component, AfterViewInit, OnDestroy } from '@angular/core';
declare var $: any; // Declare jQuery

@Component({
  selector: 'app-trusted-by',
  templateUrl: './trusted-by.component.html',
  styleUrls: ['./trusted-by.component.css']
})
export class TrustedByComponent implements AfterViewInit, OnDestroy {

  private mutationObserver: MutationObserver | undefined;

  constructor() { }

  ngAfterViewInit(): void {
    this.initializeSlick();

    // Watch for changes in the 'dir' attribute
    this.mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        this.reinitializeSlick();
      });
    });

    const targetNode = document.documentElement; // Observe the <html> element
    this.mutationObserver.observe(targetNode, {
      attributes: true, // Watch for attribute changes
      attributeFilter: ['dir'] // Only listen for changes in 'dir' attribute
    });
  }

  initializeSlick(): void {
    const isRtl = document.documentElement.getAttribute('dir') === 'rtl';

    $('.customer-logos').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      rtl: isRtl, // Enable RTL mode if the document is in RTL
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 1200, // Large devices (desktops)
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 992, // Medium devices (tablets)
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 768, // Small devices (phones)
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 576, // Extra small devices (phones)
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });
  }

  reinitializeSlick(): void {
    $('.customer-logos').slick('unslick'); // Destroy the current instance
    this.initializeSlick(); // Reinitialize with the new direction
  }

  ngOnDestroy(): void {
    if (this.mutationObserver) {
      this.mutationObserver.disconnect(); // Stop observing when the component is destroyed
    }
  }
}
