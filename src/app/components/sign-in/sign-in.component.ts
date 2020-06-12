import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { Store } from '@ngrx/store';
import { UserState } from '../../store/state/user.state';
import { selectAuthState } from './../../store/state/user.state';

import { LogIn } from './../../store/actions/auth.actions';
import { User } from './../user/user.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  login = false;
  getState: Observable<any>;
  errorMessage: string | null;



  constructor(
    private store: Store<UserState>,
    private formBuilder: FormBuilder
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.getState.subscribe(state => {
      this.errorMessage = state.errorMessage;
    });
  }

  // convenient getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onLogin(): void {
    this.login = true;

    if (this.loginForm.invalid) { return; }
    const rawLogin = this.loginForm.getRawValue();
    const payload = {
      email: rawLogin.email,
      password: rawLogin.password
    };
    console.log('payload', payload);

    this.store.dispatch(new LogIn(payload));
  }

}
