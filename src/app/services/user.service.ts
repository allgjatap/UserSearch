import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  name!: string;

  constructor(private http: HttpClient) { }

  getUser(name: string){
    return this.http
    .get(`https://api.github.com/search/users?q=${name}`)
    .pipe(map((res: any) => res.items));
  }
}
