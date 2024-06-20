import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getAllHotels(){
    return this.http.get('https://api.everrest.educata.dev/shop/products/all/')
  }

  getHotelById(id:string){
    return this.http.get(`https://api.everrest.educata.dev/shop/products/all/${id}`)
  }
}
