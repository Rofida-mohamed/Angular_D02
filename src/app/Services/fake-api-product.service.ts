import { IProduct } from './../Models/i-product';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FakeApiProductService {
  baseURL : string = 'http://localhost:3002/products'
  constructor( private http: HttpClient) { }

  getAll(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.baseURL);
  }

  getById(_id : number): Observable<IProduct>{
    return this.http.get<IProduct>(`${this.baseURL}/${_id}`)
  }
  
  getNewId(): Observable<number> {
    return this.http.get<IProduct[]>(this.baseURL).pipe(
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

  add(prod:IProduct){
    return this.http.post(this.baseURL,prod)
  }

  edit(id: number, prod:IProduct){
    return this.http.put(`${this.baseURL}/${id}`,prod)
  }
 
  delete(id : number){
    return this.http.delete(`${this.baseURL}/${id}`)
  }

  testObservable():Observable<string>{
    console.log("test funcation called");
    let myObservable = new Observable<string>((Observable)=>{
      /**
       *  observer.next()
       *  observer.error()
       *  observer.cpmplete()
       */
      console.log("hiiiiii");
      Observable.next("first add");
      Observable.next("second data");
      

      if (false){
        Observable.error("this is an error")
      }

      return {
        unsubscribe() {
          console.log("end");
        },
      }
      Observable.complete();
    } );

    return myObservable;
  }
}
