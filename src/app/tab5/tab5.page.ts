import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  element: HTMLElement;
  element2: HTMLElement;
  check: HTMLElement;
  constructor() { }
  MostrarDiv(index) {

    this.element = document.getElementById("content1") as HTMLElement;
    
    this.element2 = document.getElementById("content2") as HTMLElement;

    this.check = document.getElementById("check") as HTMLElement;
    
    switch (index) {
      case 1:
          this.element.style.display='block';
          this.element2.style.display='none';


        break;
        case 2:
          this.element2.style.display='block';
          this.element.style.display='none';


        break;
      default:
        break;
    }
  }
 






  ngOnInit() {
    
  }


}
