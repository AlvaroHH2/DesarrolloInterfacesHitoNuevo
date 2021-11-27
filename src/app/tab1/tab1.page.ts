import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  element: HTMLElement;
 
  constructor(public toastController: ToastController) {}
  func(index,x) {
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

async favoritos() {
  const toast = await this.toastController.create({
      
    position: 'top',
    duration:2000,
      color:'nuevo',
    message: 'Añadido a Favoritos',
    buttons: [
      {
        side: 'start',
        icon: 'heart',
        
      }
     
      /*, {
        text: 'Done',
        role: 'cancel',
      
      }*/
    ]
  });
  await toast.present();

  const { role } = await toast.onDidDismiss();
 
}

}

    
  


