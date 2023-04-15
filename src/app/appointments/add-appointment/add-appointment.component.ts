import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Appointment } from '../models/Appointments';
import { AddAppointmentsService } from '../Services/add-appointments.service';


@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {
 
  appointment: Appointment | any = new Appointment();
  // ordinaryDateSelected: any;
  patients:any;
  doctors: any ;
  data: any;
  // addForm: any;


   submitted:boolean=false;  

  addForm = new FormGroup ({
    title: new FormControl("", Validators.required),
    date: new FormControl("", Validators.required),
    time: new FormControl("", Validators.required),
    patient: new FormControl("", Validators.required),
    doctor: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required)
  });
 
  constructor(private addAppointments: AddAppointmentsService){
    
  // curentDate : any  = new Date();
  // this.ordinaryDateSelected!= Date;
  }  

  ngOnInit(): void {
      this. fetchPatientsData();
      this.fetchDoctorsData();
      // this.disablePastDate();
  } 
  

  get add() {
    return this.addForm.controls
  }

  // disablePastDate(){
  //   var date: any = new Date();
  //   var toDate:any = date.getDate();
  //   var month: any = date.getmonth() + 1;
  //   var year = date.getFullYear();

  //   this.minDate = year + "-" + month + "-" + toDate;
  //   }

  fetchPatientsData(){

    return this.addAppointments.getPatients().subscribe((resp: any) => {
      this.patients = resp;
      })
    }

  fetchDoctorsData(){
    return this.addAppointments.getDoctors().subscribe((resp:any)=>{
      this.doctors = resp;
      // console.log(this.doctors);
      
    })
  } 

  savedata(){
    this.submitted=true
    if(this.addForm.invalid){
      return null;
    }
    else{
      return this.addAppointments.postAppointmentData(this.addForm.value).subscribe((resp) => {
        console.log(resp);
        alert('Appointment added successfully...')
        window.location.reload();
      })
    }
   
  }
  


  }

 
 





