import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpService } from 'src/app/components/user';
import { ISignUp } from 'src/app/components/user/user.model';

@Component({
    selector: 'complete-profile',
    templateUrl: './complete-profile.component.html',
    styleUrls: ['./complete-profile.component.scss']
})

export class CompleteProfileComponent implements OnInit{

    completeProfileForm: FormGroup;
    mouseOver: boolean;
    dateOfOps: FormControl;
    employees: FormControl;
    description: FormControl;
    jobs: FormControl;
    banks: FormControl;
    fullName: FormControl;
    idn: FormControl;
    share: FormControl;
    loanAmount: FormControl;
    total: FormControl;
    email: FormControl;
    phone: FormControl;
    contribution: FormControl;
    physicalAddress: FormControl;

    constructor(private signUp: SignUpService, private router: Router) { }

    ngOnInit() {
        this.fullName = new FormControl('', [Validators.required]);
        this.dateOfOps = new FormControl('', [Validators.required]);
        this.share = new FormControl('', [Validators.required]);
        this.idn = new FormControl('', [Validators.required]);
        this.email = new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]);
        this.employees = new FormControl('', [Validators.required]);
        this.loanAmount = new FormControl('', [Validators.required]);
        this.total = new FormControl('', [Validators.required]);
        this.contribution = new FormControl('', [Validators.required]);
        this.description = new FormControl('', [Validators.required]);
        this.banks = new FormControl('', [Validators.required]);
        this.jobs = new FormControl('', [Validators.required]);
        this.phone = new FormControl('', [Validators.required]);
        this.physicalAddress = new FormControl('', [Validators.required]);

        this.completeProfileForm = new FormGroup({
            fullName: this.fullName,
            dateOfOps: this.dateOfOps,
            share: this.share,
            idn: this.idn,
            email: this.email,
            employees: this.employees,
            loanAmount: this.loanAmount,
            total: this.total,
            contribution: this.contribution,
            description: this.description,
            banks: this.banks,
            jobs: this.jobs,
            phone: this.phone,
            physicalAddress: this.physicalAddress
        });
    }

    saveUserInfo(data: ISignUp) {
        if (this.completeProfileForm.valid) {
            const completeProfileForm: ISignUp = {
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

            console.log(`form data captured: ${completeProfileForm}`);
            if (this.signUp.saveUserInfo(completeProfileForm)) {
                this.router.navigate(['user/profile']);
            }
        }
    }

    cancel() {
        this.router.navigate(['']);
    }

}
