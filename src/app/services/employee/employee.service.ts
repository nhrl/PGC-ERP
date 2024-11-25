import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiUrl = "http://127.0.0.1:8000/api/pictures/";
  constructor(private http:HttpClient) { }

  login($data: any) {
    return this.http.post('http://127.0.0.1:8000/api/login',$data);
  }

  register($data: any) {
    return this.http.post('http://127.0.0.1:8000/api/register',$data);
  }

  getProfile($id:any) {
      return this.http.get('http://127.0.0.1:8000/api/profile/'+$id);
  }
  getPicture($img:any): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + $img);
  }

  updateProfile($id : any, $data : any) {
    return this.http.post('http://127.0.0.1:8000/api/edit-profile/'+$id, $data);
  }

  getTotalCustomer() {
    return this.http.get('http://127.0.0.1:8000/api/total-customer');
  }
}
