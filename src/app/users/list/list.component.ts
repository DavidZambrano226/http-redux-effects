import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: UserModel[] = [];

  constructor( private userService: UserService) { }

  ngOnInit() {

    this.userService.getUsers().subscribe( (usersResponse: UserModel[]) => this.users = usersResponse );
  }

}
