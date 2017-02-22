import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
    apiKey: "AIzaSyASySrC3ivy4CVTG1GJwbyQwc84L0bH1W4",
    authDomain: "businesscontacts-abce0.firebaseapp.com",
    databaseURL: "https://businesscontacts-abce0.firebaseio.com",
    storageBucket: "businesscontacts-abce0.appspot.com",
    messagingSenderId: "904356054402"
  };


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
