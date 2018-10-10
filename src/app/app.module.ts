import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';

const config = {
  apiKey: '[INSERT YOUR FIREBASE SETTINGS HERE]',
  authDomain: '[INSERT YOUR FIREBASE SETTINGS HERE]',
  databaseURL: '[INSERT YOUR FIREBASE SETTINGS HERE]',
  projectId: '[INSERT YOUR FIREBASE SETTINGS HERE]',
  storageBucket: '[INSERT YOUR FIREBASE SETTINGS HERE]',
  messagingSenderId: '[INSERT YOUR FIREBASE SETTINGS HERE]'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
imports: [
    BrowserModule,
  ],
  providers: [],
  entryComponents: [
   LoginComponent
  ]
})
export class AppModule {

  constructor(private injector: Injector) {}

  ngDoBootstrap() {

    const loginElement = createCustomElement(LoginComponent, {injector: this.injector});
    customElements.define('login-view', loginElement);
  }

}
