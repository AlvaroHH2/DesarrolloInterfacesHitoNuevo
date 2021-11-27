import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  element: HTMLElement;
  public contador=0;
  constructor() {}
  funcion(index){
    this.element=document.getElementById("cantidad") as HTMLElement;
    if (index==1)
    {
      this.contador+=1;
      var contadorF=String(this.contador);
      this.element.innerHTML=contadorF;
    }
    else if(this.contador<=0){
      this.contador=0;
      var contadorF=String(this.contador);
      this.element.innerHTML=contadorF; this
    }
    else {
      this.contador-=1;
       var contadorF=String(this.contador);
       this.element.innerHTML=contadorF;

    }

  }
}
