import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAppointmentComponent } from './appointments/add-appointment/add-appointment.component';
import { EditAppointmentComponent } from './appointments/edit-appointment/edit-appointment.component';
import { HomeComponent } from './appointments/home/home.component';
import { ViewAppointmentComponent } from './appointments/view-appointment/view-appointment.component';

const routes: Routes = [
  {path: '', redirectTo:"view-appointments",pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'add-appointments', component:AddAppointmentComponent},
  {path: 'view-appointments', component:ViewAppointmentComponent},
  {path: 'edit-appointments/:id', component:EditAppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
