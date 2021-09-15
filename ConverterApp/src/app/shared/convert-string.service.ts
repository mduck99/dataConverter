import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConvertString } from './convert-string.model';

@Injectable({
  providedIn: 'root'
})
export class ConvertStringService {

  constructor(private http: HttpClient) { 
    
  }

  formData: ConvertString = new ConvertString();
  formResult: ConvertString = new ConvertString();
  list: string[] = ['Hex', 'Base64', 'ASCII', 'String'];
  resType: string;

  readonly baseURL = 'http://localhost:62911/api/Convert/';
  convert(type:string) {
    console.log(this.formData);
    return this.http.post(this.baseURL + type, this.formData);
  }

  convertChange(type:string) {
    console.log(this.formResult);
    console.log(this.baseURL + type);
    return this.http.post(this.baseURL + type, this.formResult);
  }
}
