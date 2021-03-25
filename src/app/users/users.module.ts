import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { UserComponent } from './user/user.component';
import { UserService } from '../services/user.service';

@NgModule({
  declarations: [ListComponent, UserComponent],
  imports: [
    CommonModule
  ],
  providers: [UserService],
  exports: [ListComponent, UserComponent]
})
export class UsersModule { }
