import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerloginService {

  constructor(private http: HttpClient) { }

//   public doLogin(email: string, password: string):Observable<any> {
//     return this.http.get("http://localhost:4200/bookstoreangular/customer/customerlogin/{email}/{password}",email,password);
// }
}