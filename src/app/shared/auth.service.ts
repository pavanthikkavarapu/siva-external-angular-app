import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import { map } from 'rxjs/operators';
import { Observable, interval, pipe } from 'rxjs';
import {switchMap, map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: Http) {
  }

  login(credentials) { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials))
      .pipe(map(response => {
        // console.log(response.json());

        let result = response.json();
        if(result && result.token){

          localStorage.setItem('token',result.token);
          return 'true';
        }
        return 'false';
      }));
  }

  logout() { 
    localStorage.removeItem('token');
  }

  isLoggedIn() { 
    return false;
  }
}

