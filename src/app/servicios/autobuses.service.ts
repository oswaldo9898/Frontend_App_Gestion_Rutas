import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutobusesService {

  constructor(
    private http: HttpClient,
  ) { }

  listar_autobuses():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(environment.apiURL+"/listar_autobuses", {headers:headers})
  }

  registro_autobus(data, file):Observable<any>{
    let headers = new HttpHeaders();
    const fd = new FormData();
    fd.append('marca',data.marca);
    fd.append('modelo',data.modelo);
    fd.append('placa',data.placa);
    fd.append('foto',file);
    return this.http.post(environment.apiURL+"/registro_autobus", fd, {headers:headers})
  }
}
