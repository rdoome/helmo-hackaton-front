import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
declare var Swiper: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements AfterViewInit {

  @ViewChild('sliderContainer', { static: false }) sliderContainer!: ElementRef;

  ngAfterViewInit(): void {
    const swiper = new Swiper(this.sliderContainer.nativeElement, {
      slidesPerView: 1,
      spaceBetween: 48,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        900: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      },
    });
  }
}
