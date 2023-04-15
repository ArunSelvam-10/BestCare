import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddAppointmentsService } from '../Services/add-appointments.service';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit  {

  appointments:any;

  constructor (private addAppointmetSetvice: AddAppointmentsService, private router: ActivatedRoute){}
  ngOnInit(): void {
    this.fetchAppointments();
  }

  fetchAppointments(){
    return this.addAppointmetSetvice.getdata().subscribe((resp) => {
      this.appointments = resp;
    })
  }

  deleteAppointment(data: any){
    
    return this.addAppointmetSetvice.deleteAppointmentData(data.id).subscribe((resp) =>{
      console.log(resp);
      alert('Appointment deleted successfully...');
      window.location.reload();
    });
  }
  

}
