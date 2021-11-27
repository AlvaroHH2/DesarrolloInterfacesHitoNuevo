import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page implements OnInit {

  constructor(public toastController: ToastController) { }
  async ngOnInit() {
    
    const toast = await this.toastController.create({
        color:'success',
        position:'top',
       
        message: 'Compra Realizada',
        duration: 2000,
        buttons:[
          {
            icon:'checkmark'
          }
        ]
      });
      toast.present();
    }
  }


