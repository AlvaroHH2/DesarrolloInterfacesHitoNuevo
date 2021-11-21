import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}




buscar(event){


}

}
export class imageSlider {
  slideOpts = {
    slidesPerView: 1.5,
    spaceBetween: 5,
    speed: 500,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5
    },
    pagination : {
      el: '.swiper-pagination',
      clickable: true,
      type: 'progressbar',
      progressbarFillClass: 'swiper-pagination-progressbar-fill',
      renderProgressbar: function (progressbarFillClass) {
        return '<span class="' + progressbarFillClass + '" style="background: red"></span>';
      }
    }
  }
}