import { Injectable } from '@angular/core';
import { Usersdata, Users } from '../data/usersdata';
import { Observable ,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsermgmtService {
  users: Usersdata  = new Usersdata();
  constructor() { 

  }

  GetAllUsersData():Observable<Users[]>
  {
   
    return of(this.users.GetAllUsers());
  }
}
