import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  

  usuario= this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    });
    
    constructor(private fb: FormBuilder,
      private auth: AuthService,
      public alertCtrl: AlertController,
      private router: Router) { }
  ngOnInit() {
  }
  singin(){
    this.auth.registerUser(this.usuario.value.email, this.usuario.value.password).then( result => {
    this.router.navigate(['/tabs/tab1']);
    }).catch(err=>{
    this.alertCtrl.create({
    header: 'Error',
    subHeader: err.message,
    buttons: ['Aceptar']
    }).then(alert=>{
    alert.present();
    });
    });
    }
}
