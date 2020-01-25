import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomRequest } from '../model/customRequest';
import { Doctor } from '../model/doctor';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private url = "http://localhost:8080";
  private title = "Patients Profiles";
  // httpOptions={
  //   headers:new HttpHeaders().set("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrdXR0eSIsImV4cCI6MTU3OTc3NTY2NiwiaWF0IjoxNTc5NzU3NjY2fQ.Kddsr1Mowx1AWViMmyXnsPAT5mdFkekVojO_8fRiiQcfwAk9DUugt457P4nEvBkAf7ar6zzb0CMUmGdc6LKfBA")
  // };
  public  getAllDoctors = ():Observable<CustomRequest<Doctor>> =>{
    return this.http.get<CustomRequest<Doctor>>(`${this.url}/doctors/getAllDoctor`);
  }
  public createDoctor = (doctor:Doctor):Observable<CustomRequest<number>> =>{
    return this.http.post<CustomRequest<number>>(`${this.url}/doctors/create`,doctor);
  }
  public updateDoctor = (doctor:Doctor):Observable<CustomRequest<number>> =>{
    console.log("service "+ doctor);
    return this.http.post<CustomRequest<number>>(`${this.url}/doctors/update`,doctor);
  }
  public deleteDoctor = (doctor:Doctor):Observable<CustomRequest<number>> =>{
    console.log("service "+ doctor);
    return this.http.post<CustomRequest<number>>(`${this.url}/doctors/delete`,doctor);
  }
  public getAllPatients = () =>{
    return this.http.get(`${this.url}/api/patients/`);
  }

  constructor(private http : HttpClient) { }
}