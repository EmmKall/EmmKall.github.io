import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectService
{

  /* url = 'http://localhost/api_profile/proyect/'; */
  url = 'https://emm-dev.com/apis/api_profile/proyect/';
  headers = new HttpHeaders();

  constructor( private http: HttpClient )
  {
    this.headers = new HttpHeaders({
      'content-type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('_jwt')}`
    });
  }

  getAll(): Observable<any>
  {
    return this.http.get( `${this.url}index` ); //{ headers: this.headers }
  }

  find( id: number ) : Observable<any>
  {
    return this.http.get(`${this.url}find/${id}` ); // { headers: this.headers }
  }

}
