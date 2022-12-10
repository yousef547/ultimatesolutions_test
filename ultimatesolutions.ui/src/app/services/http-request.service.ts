import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {


  constructor(private _httpclient:HttpClient) { }

  servicePost(apiName:any,formValue:any):Observable<any>
  {
    return this._httpclient.post(`${environment.url_api}${apiName}`,formValue);
  }

  serviceGet(apiName:any):Observable<any>
  {
    return this._httpclient.get(`${environment.url_api}${apiName}`);
  }
  serviceDelete(apiName:any):Observable<any>
  {
    return this._httpclient.delete(`${environment.url_api}${apiName}`);
  }
  servicePut(apiName:any,formValue:any):Observable<any>
  {
    return this._httpclient.put(`${environment.url_api}${apiName}`,formValue);
  }
}
