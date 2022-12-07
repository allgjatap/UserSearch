import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { Users } from '../models/users.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
  providers: [UserService],
  
})
export class UserSearchComponent {
  @Input() name!: string;
  user!: Users;
  defaultUser: Users[] = [];
  text!: '';
  private _searchSubject: Subject<string> = new Subject();
  countUpdate: any;
  constructor(private service: UserService){}

  ngOnInit(){
    this.defaultUser = [];
    //this.test();
  }

  test(){
    this.service.getUser(this.name).subscribe(
      {
        next: (res: Users[]) => {
          this.defaultUser = res;          
          console.log(this.defaultUser, "all data");

        }, error: (err) => {
          console.log(err);
        }
      }
    );
  }

 
}
