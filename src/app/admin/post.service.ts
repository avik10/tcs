import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { Posts } from './posts';


@Injectable({
  providedIn: 'root'
})
export class PostService {
url = "";
  constructor(private http: HttpClient) { }
  getposts(){
    debugger;
    return this.http.get(this.url);
  }
}
