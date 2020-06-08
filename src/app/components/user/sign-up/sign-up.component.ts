import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ISignUp } from '../user.model';
import { SignUpService } from '../../../shared/services/sign-up.service';
import { Router } from '@angular/router';
import { passwordMatchValidator } from 'src/app/shared/custom-validator';


@Component({
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
    signUpForm: FormGroup;
    mouseOver: boolean;
    fullName: FormControl;
    userName: FormControl;
    phone: FormControl;
    email: FormControl;
    businessName: FormControl;
    username: FormControl;
    newPassword: FormControl;
    confirmPassword: FormControl;

    constructor(private signUp: SignUpService, private router: Router) { }

    ngOnInit() {
        this.fullName = new FormControl('', [Validators.required]);
        this.userName = new FormControl('', Validators.required);
        this.phone = new FormControl('', Validators.required);
        this.email = new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]);
        this.businessName = new FormControl('', [Validators.required]);
        this.userName = new FormControl('', Validators.required);
        this.newPassword = new FormControl('', [Validators.required]);
        this.confirmPassword = new FormControl('', [Validators.required]);

        this.signUpForm = new FormGroup({
            fullName: this.fullName,
            userName: this.userName,
            email: this.email,
            phone: this.phone,
            businessName: this.businessName,
            newPassword: this.newPassword,
            confirmPassword: this.confirmPassword
        }, { validators: passwordMatchValidator });
    }

    saveUserInfo(data: ISignUp) {
        console.log('form data captured ', this.signUpForm.value);
        if (this.signUpForm.valid) {
            const signUpData: ISignUp = {
                fullName: data.fullName,
                businessName: data.businessName,
                email: data.email,
                phone: data.phone,
                password: data.confirmPassword,
                username: data.username
            };

            if (this.signUp.saveUserInfo(signUpData)) {
                this.router.navigate(['user/profile']);
            }
        }
    }

    cancel() {
        this.router.navigate(['']);
    }

}
