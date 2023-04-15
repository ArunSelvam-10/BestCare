import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AddAppointmentsService } from '../Services/add-appointments.service';


@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit{

  patients:any;
  doctors:any;
  data: any;
  id: any;
  

  editForm = new FormGroup({
    title: new FormControl(""),
      date: new FormControl(""),
      time: new FormControl(""),
      patient: new FormControl(""),
      doctor: new FormControl(""),
      description: new FormControl("")
  })

  constructor (private addAppointmentService: AddAppointmentsService, private router: ActivatedRoute ){}  

  ngOnInit(): void {
    // let ID = this.router.snapshot.params['id']
    this.fetchPatientsData();
    this.fetchDoctorsData();
    this.updateAppointmentData();

  }
    
  

  get add() {
    return this.editForm.controls;
  }

fetchPatientsData(){
  return this.addAppointmentService.getPatients().subscribe((resp) =>{
    this.patients = resp;
  })
}

fetchDoctorsData(){
  return this.addAppointmentService.getDoctors().subscribe((resp) =>{
    this.doctors = resp;
  })
}

updateAppointmentData(): void{
  // console.log(this.router.snapshot.params['id']);
  this.addAppointmentService.getAppointmentData(this.router.snapshot.params['id']).subscribe((resp) =>{
    this.editForm = new FormGroup({
      title: new FormControl(resp['title']),
        date: new FormControl(resp['date']),
        time: new FormControl(resp['time']),
        patient: new FormControl(resp['patient']),
        doctor: new FormControl(resp['doctor']),
        description: new FormControl(resp['description'])
  })
});

}

update(){
 return this.addAppointmentService.putAppointmentData(this.router.snapshot.params['id'],
 this.editForm.value).subscribe((resp) =>{
   console.log(resp);
   alert("Update Successfully...!");
   window.location.reload();
 });
}

}