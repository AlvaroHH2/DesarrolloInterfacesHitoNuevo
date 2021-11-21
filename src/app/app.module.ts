import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth'
export const firebaseConfig = {
  apiKey: "AIzaSyDHo8bA3olxfAnWg5wI2eBgtpC7bpNHing",
  authDomain: "alvaro2-1f1eb.firebaseapp.com",
  projectId: "alvaro2-1f1eb",
  storageBucket: "alvaro2-1f1eb.appspot.com",
  messagingSenderId: "368805510733",
  appId: "1:368805510733:web:102693e54b0fe32747e604",
  measurementId: "G-JKB694PGF3"
  }

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  AngularFireModule.initializeApp(firebaseConfig), AngularFirestoreModule, AngularFireAuthModule],
  providers: [
  AngularFireAuth,
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
  })
export class AppModule {}
