import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserModel } from 'src/app/models/user.model';
import { AppState } from 'src/app/store/app.reducers';
import { loadUser } from '../../store/actions/user.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: UserModel;
  loading = false;
  error: any;

  constructor( private routerAct: ActivatedRoute, private store: Store<AppState> ) { }

  ngOnInit() {

    this.store.select('user').subscribe( ({user, loading, error}) => {
      this.user = user;
      this.loading = loading;
      this.error = error;
    });

    this.routerAct.params.subscribe( ({ id }) => {
      this.store.dispatch( loadUser({id}) );
    });
  }

}
