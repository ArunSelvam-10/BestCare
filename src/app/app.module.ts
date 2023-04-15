import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAppointmentComponent } from './appointments/add-appointment/add-appointment.component';

import { ViewAppointmentComponent } from './appointments/view-appointment/view-appointment.component';
import { EditAppointmentComponent } from './appointments/edit-appointment/edit-appointment.component';
import { HttpClientModule } from '@angular/common/http';
// import { RouterModule } from '@angular/router';
import { HomeComponent } from './appointments/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAppointmentComponent,
    ViewAppointmentComponent,
    EditAppointmentComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot([]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
