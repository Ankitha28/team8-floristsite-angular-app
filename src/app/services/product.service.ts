import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import  { Product } from '../product/product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

 private baseUrl = 'http://localhost:8081';

  constructor(private httpClient :HttpClient) {}

 public  getProducts (): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseUrl}/products/list`);
    }
}


