import { NgModule } from '@angular/core';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireModule } from '@angular/fire/compat';



@NgModule({
  imports: [

  IonicModule.forRoot(),
  AngularFireModule.initializeApp(environment.firebase),
  AngularFireAuthModule
    
  ],
  exports: [
    BrowserModule,
    IonicModule
  ],
  providers: [
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy
    }
  ]
})
export class CoreModule { }
