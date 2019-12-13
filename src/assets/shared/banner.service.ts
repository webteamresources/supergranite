import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const URL = '../../assets/content/banner-data.json';
@Injectable({
 providedIn: 'root'
})
export class BannerService {

 constructor(private http: HttpClient) {
 }

 getData() {
   return this.http.get(URL)
 }
}