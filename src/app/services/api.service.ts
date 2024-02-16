import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RespontCatsI } from '../interface/respontCatsInterface';

@Injectable({
  providedIn: 'root',
  
})
export class ApiService {

  constructor(private readonly httpCient: HttpClient) {
    console.log('ApiService');
   }
   httpOptions = new HttpHeaders ({'API-KEY': 'bda53789-d59e-46cd-9bc4-2936630fde39'});
   getCats() :Observable<RespontCatsI[]>  {

     return this.httpCient.get<RespontCatsI[]>('https://api.thecatapi.com/v1/breeds', {headers: this.httpOptions});
   }
   getCats2(){

    return this.httpCient.get('https://api.thecatapi.com/v1/images/search?limit=10')
   }
   
}
