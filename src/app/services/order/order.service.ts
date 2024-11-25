import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  getOrder($status: any) {
    return this.http.get('http://127.0.0.1:8000/api/get-order-status/'+$status);
  }

  getSale() {
    return this.http.get('http://127.0.0.1:8000/api/sale');
  }

  getIncome() {
    return this.http.get('http://127.0.0.1:8000/api/total-income');
  }

  updateStatus(id: any, newStatus: any): Observable<any> {
    const url = `http://127.0.0.1:8000/api/orders/${id}/update-status/${newStatus}`;
    return this.http.post(url, {});
  }

  countCategory($category : any) {
    return this.http.get('http://127.0.0.1:8000/api/count/'+$category);
  }

  countAll() {
    return this.http.get('http://127.0.0.1:8000/api/count-all');
  }
}
