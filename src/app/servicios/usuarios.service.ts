import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient,
  ) { }

  getToken(){
    return localStorage.getItem('token');
  }
  
  login(data):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(environment.apiURL+"/login", data, {headers:headers})
  }

  registro(data):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(environment.apiURL+"/registro", data, {headers:headers})
  }
}
