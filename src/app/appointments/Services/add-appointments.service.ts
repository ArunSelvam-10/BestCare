import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AddAppointmentsService {
 

  constructor (private http: HttpClient) { }

  url: string = "http://localhost:3000";

  //For getting data from database
  getdata(){
    return this.http.get(this.url+"/appointments");
  }

  //Fetching Patients data from database
  getPatients(){
    return this.http.get( this.url+"/patients");
  }
  
  //Fetching Doctors data from database
  getDoctors(){
    return this.http.get(this.url+"/doctors");
  }

  //Post new input data from add appointment to database
  postAppointmentData(data: any){
    return this.http.post(this.url+"/appointments", data);
  }
  
  //Delete stored data from database by calling particular data's id
  deleteAppointmentData(id: any){
    return this.http.delete(this.url+"/appointments/" + id);
  } 
  
  //Get appointment data from database by calling particular data's id for edit that stored data
  getAppointmentData(id: any){
    return this.http.get(`${this.url+"/appointments"}/${id}`);
  }
  
  //For update that datas with new data
  putAppointmentData(id:any, data:any){
    return this.http.put(`${this.url+"/appointments"}/${id}`, data);
  }
}
