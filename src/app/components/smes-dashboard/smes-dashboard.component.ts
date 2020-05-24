import { Router } from '@angular/router';
import { selectAuthState } from './../../store/state/user.state';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Logout } from './../../store/actions/auth.actions';
import { UserState } from './../../store/reducers/auth.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-smes-dashboard',
  templateUrl: './smes-dashboard.component.html',
  styleUrls: ['./smes-dashboard.component.scss']
})
export class SmesDashboardComponent implements OnInit {

  getState: Observable<any>;
  isAuthenticated: false;
  user = null;
  errorMessage = null;

  constructor(private store: Store<UserState>, public router: Router) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    this.getState.subscribe(state => {
      this.isAuthenticated = state.isAuthenticated;
      this.user = state.user;
      this.errorMessage = state.errorMessage;
    });
  }

  logout(): void {
    this.store.dispatch(new Logout());
    this.router.navigateByUrl('/');
  }

}
