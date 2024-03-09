import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../Models/i-user';
import { Observable, catchError, map } from 'rxjs';

@Injectable({ 
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http: HttpClient) { }

  baseURL: string = "http://localhost:3002/users";

  token: boolean = false;
  user: IUser | undefined;
  login(email:string, password:string){
    this.http.get(`${this.baseURL}?email=${email}&password=${password}`).subscribe(
      {
        next:(data)=>{ 
          
          
            if(Array.isArray(data) && data.length ==1){
              
              this.user = data[0];
              console.log(this.user)
              console.log(this.isadmin())
              this.token = true;
            }
          }

      }
    )
  }

  logout(){
    this.token=false;
  }

  islogin(){
    return this.token;
  }

  getAll(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.baseURL);
  }

  getById(_id : number): Observable<IUser>{
    return this.http.get<IUser>(`${this.baseURL}/${_id}`)
  }
  
  getNewId(): Observable<number> {
    return this.http.get<IUser[]>(this.baseURL).pipe(
      map((data) => {
        let maxId = 0;
        data.forEach((product) => {
          if (+product.id > maxId) {
            maxId = +product.id;
          }
        });
        return maxId + 1;
      }),
      catchError(() => {
        return new Observable<number>();
      })
    );
  }

  add(prod:IUser){
    return this.http.post(this.baseURL,prod)
  }

  edit(id: number, prod:IUser){
    return this.http.put(`${this.baseURL}/${id}`,prod)
  }
 
  delete(id : string){
    return this.http.delete(`${this.baseURL}/${id}`)
  }



  isadmin(){
    return this.user?.role == "admin";
  }
 
}
