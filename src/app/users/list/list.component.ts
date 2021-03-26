import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserModel } from 'src/app/models/user.model';
import { loadUsers } from '../../store/actions/users.actions';
import { AppState } from '../../store/app.reducers';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: UserModel[] = [];
  loading = false;
  error: any;

  constructor( private store: Store<AppState>) { }

  ngOnInit() {

    this.store.select('users').subscribe( ({ users, loading, error }) => {
      this.users = users;
      this.loading = loading;
      this.error = error;
    });

    this.store.dispatch(loadUsers());
  }

}
