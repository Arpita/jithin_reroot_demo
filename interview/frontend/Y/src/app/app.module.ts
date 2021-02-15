import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApartmentComponent } from './apartment/apartment.component'
@NgModule({
  declarations: [
    AppComponent,
    ApartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [ApartmentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
