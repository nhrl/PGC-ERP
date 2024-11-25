import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  createItem($data : any) {
    return this.http.post('http://127.0.0.1:8000/api/add-product',$data);
  }

  getProduct($category: any) {
    return this.http.get('http://127.0.0.1:8000/api/product/'+$category);
  }

  editProduct($data: any, $id: any) {
    return this.http.post('http://127.0.0.1:8000/api/edit-product/'+$id, $data);
  }

  deleteProduct($id: any) {
    return this.http.delete('http://127.0.0.1:8000/api/delete-product/'+$id);
  }

  totalProduct() {
    return this.http.get('http://127.0.0.1:8000/api/total-product');
  }

  getLowestQuantity() {
    return this.http.get('http://127.0.0.1:8000/api/lowest-product');
  }
}         
