import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ISignUp } from '../user.model';
import { SignUpService } from './sign-up.service';
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
    physicalAddress: FormControl;
    country: FormControl;
    phone: FormControl;
    email: FormControl;
    businessName: FormControl;
    businessNumber: FormControl;
    dateOfReg: FormControl;
    regAddress: FormControl;
    businessEmail: FormControl;
    businessTel: FormControl;
    website: FormControl;
    businessNature: FormControl;
    newPassword: FormControl;
    confirmPassword: FormControl;

    constructor(private signUp: SignUpService, private router: Router) { }

    ngOnInit() {
        this.fullName = new FormControl('', [Validators.required]);
        this.physicalAddress = new FormControl('', [Validators.required]);
        this.country = new FormControl('', [Validators.required]);
        this.phone = new FormControl('', [Validators.required]);
        this.email = new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]);
        this.businessName = new FormControl('', [Validators.required]);
        this.businessNature = new FormControl('', [Validators.required]);
        this.businessNumber = new FormControl('', [Validators.required]);
        this.dateOfReg = new FormControl('', [Validators.required]);
        this.regAddress = new FormControl('', [Validators.required]);
        this.businessEmail = new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]);
        this.businessTel = new FormControl('', [Validators.required]);
        this.website = new FormControl('', [Validators.required]);
        this.newPassword = new FormControl('', [Validators.required]);
        this.confirmPassword = new FormControl('', [Validators.required]);

        this.signUpForm = new FormGroup({
            fullName: this.fullName,
            physicalAddress: this.physicalAddress,
            country: this.country,
            phone: this.phone,
            email: this.email,
            businessName: this.businessName,
            businessNumber: this.businessNumber,
            dateOfReg: this.dateOfReg,
            regAddress: this.regAddress,
            businessEmail: this.businessEmail,
            businessTel: this.businessTel,
            website: this.website,
            businessNature: this.businessNature,
            newPassword: this.newPassword,
            confirmPassword: this.confirmPassword
        }, { validators: passwordMatchValidator });
    }

    saveUserInfo(data: ISignUp) {
        if (this.signUpForm.valid) {
            const signUpData: ISignUp = {
                fullName: data.fullName,
                businessEmail: data.businessEmail,
                businessName: data.businessName,
                businessNature: data.businessNature,
                businessNumber: data.businessNumber,
                businessTel: data.businessTel,
                country: data.country,
                dateOfReg: data.dateOfReg,
                email: data.email,
                phone: data.phone,
                physicalAddress: data.physicalAddress,
                regAddress: data.regAddress,
                website: data.website,
                newPassword: data.newPassword,
                confirmPassword: data.confirmPassword
            };

            console.log(`form data captured: ${signUpData}`);
            if (this.signUp.saveUserInfo(signUpData)) {
                this.router.navigate(['user/profile']);
            }
        }
    }

    cancel() {
        this.router.navigate(['']);
    }

}
