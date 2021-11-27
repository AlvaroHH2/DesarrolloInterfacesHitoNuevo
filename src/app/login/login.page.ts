import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario= this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    });
    
    constructor(private fb: FormBuilder,public toastController: ToastController,
      private auth: AuthService,
      public alertCtrl: AlertController,
      private router: Router) { }
    ngOnInit() {
    }
      login(){
        this.auth.loginUser(this.usuario.value.email, this.usuario.value.password).then( result => {
        this.router.navigate(['/tabs']);
        }).catch(err=>{
        this.alertCtrl.create({
        header: 'Error',
        subHeader: err.message,
        buttons: ['Aceptar']
        }).then(async alert=>{

    
            const toast = await this.toastController.create({
              position:'top',
              message: '¡ Usuario o Contraseña Incorrecto !',
              color:'medium',
              duration: 1500
            });
            toast.present();
          
        
        });
        });
        }
       
    }
    
  
