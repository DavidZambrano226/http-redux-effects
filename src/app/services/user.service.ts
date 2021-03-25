import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) { }

  getUsers(): Observable<UserModel[]> {
    const url = `${environment.api}users?per_page=6`;
    return this.http.get(url).pipe(
      map( resp =>  resp['data'] )
    );
  }
}
