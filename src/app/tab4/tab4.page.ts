import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  element: HTMLElement;

  constructor() { }
  func() {
    
    
    this.element=document.getElementById("botonColor") as HTMLElement;
   

    this.element.style.color='red';
   


  }
  ngOnInit() {
  }

}
