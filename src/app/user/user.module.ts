import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlistComponent } from './userlist.component';
import { UsermgmtService } from '../service/usermgmt.service';
import { Users } from '../data/usersdata';



@NgModule({
  declarations: [UserlistComponent],
  imports: [
    CommonModule
  ],
  exports: [UserlistComponent]
})
export class UserModule { 
  
}
