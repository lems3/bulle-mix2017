import { User } from './../../models/user';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class UserService {

  private _currentUser = new BehaviorSubject<User>(null);
  currentUser = this._currentUser.asObservable();

  constructor(
    private http: Http
  ) { }

  login(email:string,password:string):Promise<User|any>{
    return new Promise((resolve,reject)=>{
      this.http.post(
        'https://2q6hctzngk.execute-api.us-east-1.amazonaws.com/prod/connexion',
        {
          email:email,
          password:password
        })
      .toPromise()
      .then((result)=>{
        let user = result.json();
        if(!user.bulles)
          user.bulles = 0;
        this.emitUser(user);
        resolve(user);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      })
    });
  }

  logout():Promise<any>{
    return new Promise((resolve,reject) => {
      this._currentUser.next(null);
      resolve(null);
    })
  }

  register(name: string, email: string, password: string):Promise<User|any>{
    return new Promise((resolve,reject) => {
      this.http.post(
        'https://2q6hctzngk.execute-api.us-east-1.amazonaws.com/prod/inscription',
        {
          name:name,
          email:email,
          password:password
        }
      )
      .toPromise()
      .then((result) => {
        let user = result.json();
        if(!user.bulles)
        user.bulles = 0;
        this.emitUser(user);
        resolve(user);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      })
    });
  }

  
  achat(nombre):Promise<any>{
    return new Promise((resolve,reject)=>{
      let user = this._currentUser.getValue();
      this.http.post(
        'https://2q6hctzngk.execute-api.us-east-1.amazonaws.com/prod/achat',
        {
          email:user.email,
          nombre:nombre
        }
      )
      .toPromise()
      .then((result)=>{
        let bulles = result.json();
        user.bulles = bulles.bulles;
        this.emitUser(user);
        resolve(true)
      })
      .catch((error) => {
        console.log(error);
        reject(false);
      })
    })
  }
  
  private emitUser(user){
    this._currentUser.next({
        name:user.name,
        email:user.email,
        rank:user.rank,
        bulles:user.bulles
      })
  }

}
