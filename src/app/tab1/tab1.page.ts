import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  element: HTMLElement;
  
  constructor() {}
  func(index) {
    
    switch (index) {
      case 1:
       
      
      
          this.element=document.getElementById("corazon1") as HTMLElement;
            this.element.style.color='red';
            
        
     
        break;
        case 2:
        
        
            this.element=document.getElementById("corazon2") as HTMLElement;
              this.element.style.color='red';
          
          
         
          break;
          case 3:
      
      
          this.element=document.getElementById("corazon3") as HTMLElement;
            this.element.style.color='red';
         
        
       
        break;
        case 4:
      
          this.element=document.getElementById("corazon4") as HTMLElement;
            this.element.style.color='red';
        
        
       
        break;
      default:
        break;
    }
  
   }
   
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

