import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Request } from '../models/Request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http:HttpClient) {}

  addRequest(request:Request):Promise<Request>{
    return this.http.post<Request>("http://localhost:1212/request/set",request).toPromise();
   }

   getAllRequest():Promise<Request[]>{
    return this.http.get<Request[]>("http://localhost:1212/request/getall").toPromise();
   }
   getRequestByAccountId(id:number):Promise<Request[]>{
    return this.http.get<Request[]>(`http://localhost:1212/request/${id}`).toPromise();
   }

   updateRequest(request:Request){
    return this.http.post<Request>("http://localhost:1212/request/update",request).toPromise();
   }

   deleteRequest(id:number){
    return this.http.delete(`http://localhost:1212/request/${id}`).toPromise();
   }
}
