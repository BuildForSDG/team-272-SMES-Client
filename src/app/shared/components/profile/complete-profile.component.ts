import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpService } from 'src/app/components/user';
import { ISignUp, ICompleteSMEProfile } from 'src/app/components/user/user.model';

@Component({
    selector: 'complete-profile',
    templateUrl: './complete-profile.component.html',
    styleUrls: ['./complete-profile.component.scss']
})

export class CompleteProfileComponent implements OnInit {
    mouseOver: boolean;
    defaultedFlag: boolean;
    lawsuiteFlag: boolean;
    completeProfileForm: FormGroup;
    banks: FormArray;
    directors: FormArray;
    shareholders: FormArray;
    guarantors: FormArray;
    lenders: FormArray;
    lender: FormGroup;
    name: FormControl;
    dFullName: FormControl;
    dIDn: FormControl;
    dEmail: FormControl;
    dPhone: FormControl;
    dPhysicalAddress: FormControl;
    sFullName: FormControl;
    sIDn: FormControl;
    sEmail: FormControl;
    sPhone: FormControl;
    sPhysicalAddress: FormControl;
    share: FormControl;
    gFullName: FormControl;
    gIDn: FormControl;
    gEmail: FormControl;
    gPhone: FormControl;
    gPhysicalAddress: FormControl;
    dateOfOps: FormControl;
    employees: FormControl;
    description: FormControl;
    jobs: FormControl;
    loanAmount: FormControl;
    total: FormControl;
    contribution: FormControl;
    balance: FormControl;
    rate: FormControl;
    payment: FormControl;
    security: FormControl;
    defaulted: FormControl;
    reason: FormControl;
    lawsuites: FormControl;
    case: FormControl;
    acknowledgement: FormControl;

    constructor(private signUp: SignUpService, private router: Router) { }

    ngOnInit() {
        this.dateOfOps = new FormControl('', [Validators.required]);
        this.employees = new FormControl('', [Validators.required]);
        this.loanAmount = new FormControl('', [Validators.required]);
        this.total = new FormControl('', [Validators.required]);
        this.contribution = new FormControl('', [Validators.required]);
        this.description = new FormControl('', [Validators.required]);
        this.banks = new FormArray([]);
        this.directors = new FormArray([]);
        this.shareholders = new FormArray([]);
        this.guarantors = new FormArray([]);
        this.lenders = new FormArray([]);
        this.jobs = new FormControl('', [Validators.required]);
        this.acknowledgement = new FormControl('', Validators.required);

        this.completeProfileForm = new FormGroup({
            directors: this.directors,
            guarantors: this.guarantors,
            lenders: this.lenders,
            shareholders: this.shareholders,
            banks: this.banks,
            dateOfOps: this.dateOfOps,
            employees: this.employees,
            loanAmount: this.loanAmount,
            total: this.total,
            contribution: this.contribution,
            description: this.description,
            jobs: this.jobs,
            acknowledgement: this.acknowledgement
        });
    }

    addBanks() {
        this.banks.push(new FormControl('', Validators.required));
    }

    removeBanks(index) {
        this.banks.removeAt(index);
    }

    clearBanks() {
        this.banks.clear();
    }

    addDirectors() {
        this.dFullName = new FormControl('');
        this.dIDn = new FormControl('');
        this.dPhone = new FormControl('');
        this.dEmail = new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]);
        this.dPhysicalAddress = new FormControl('');
        const director = new FormGroup({
            dFullName: this.dFullName,
            dIDn: this.dIDn,
            dPhone: this.dPhone,
            dEmail: this.dEmail,
            dPhysicalAddress: this.dPhysicalAddress
        }, Validators.required);

        this.directors.push(director);
    }

    removeDirector(index) {
        this.directors.removeAt(index);
    }

    clearDirectors() {
        this.directors.clear();
    }

    addGuarantors() {
        this.gFullName = new FormControl('');
        this.gIDn = new FormControl('');
        this.gPhone = new FormControl('');
        this.gEmail = new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]);
        this.gPhysicalAddress = new FormControl('');
        const guarantor = new FormGroup({
            gFullName: this.gFullName,
            gIDn: this.gIDn,
            gPhone: this.gPhone,
            gEmail: this.gEmail,
            gPhysicalAddress: this.gPhysicalAddress
        }, Validators.required);

        this.guarantors.push(guarantor);
    }

    removeGuarantor(index) {
        this.guarantors.removeAt(index);
    }

    clearGuarantors() {
        this.guarantors.clear();
    }

    addShareholders() {
        this.sFullName = new FormControl('');
        this.sIDn = new FormControl('');
        this.sPhone = new FormControl('');
        this.sEmail = new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]);
        this.sPhysicalAddress = new FormControl('');
        this.share = new FormControl('');

        const shareholder = new FormGroup({
            sFullName: this.sFullName,
            sIDn: this.sIDn,
            sPhone: this.sPhone,
            sEmail: this.sEmail,
            sPhysicalAddress: this.sPhysicalAddress,
            share: this.share
        }, Validators.required);

        this.shareholders.push(shareholder);
    }

    removeShareholder(index) {
        this.shareholders.removeAt(index);
    }

    clearShareholders() {
        this.shareholders.clear();
    }

    addLenders() {
        this.name = new FormControl('');
        this.balance = new FormControl('', [Validators.required]);
        this.rate = new FormControl('', [Validators.required]);
        this.payment = new FormControl('', [Validators.required]);
        this.security = new FormControl('', [Validators.required]);
        this.defaulted = new FormControl('', [Validators.required]);
        this.reason = new FormControl('', [Validators.required]);
        this.lawsuites = new FormControl('', [Validators.required]);
        this.case = new FormControl('', [Validators.required]);

        const lender = new FormGroup({
            name: this.name,
            balance: this.balance,
            rate: this.rate,
            payment: this.payment,
            security: this.security,
            lawsuites: this.lawsuites,
            defaulted: this.defaulted,
            reason: this.reason,
            case: this.case
        }, Validators.required);

        this.lenders.push(lender);
    }

    removeLender(index) {
        this.lenders.removeAt(index);
    }

    clearLenders() {
        this.lenders.clear();
    }

    setDefaulted(state) {
        this.defaultedFlag = state;
    }

    setLawsuite(state) {
        this.lawsuiteFlag = state;
    }

    saveUserInfo(data: ICompleteSMEProfile) {
        console.log('data', this.completeProfileForm.value);
        if (this.completeProfileForm.valid) {
            const completeProfileForm: ICompleteSMEProfile = {
                acknowledgement: data.acknowledgement,
                banks: data.banks,
                contribution: data.contribution,
                dateOfOps: data.dateOfOps,
                description: data.description,
                directors: data.directors,
                employees: data.employees,
                guarantors: data.guarantors,
                jobs: data.jobs,
                lenders: data.lenders,
                loanAmount: data.loanAmount,
                shareholders: data.shareholders,
                total: data.total
            };

            console.log(`form data captured: ${completeProfileForm}`);
            if (this.signUp.completeProfile(completeProfileForm)) {
                this.router.navigate(['user/profile']);
            }
        }
    }

    cancel() {
        this.router.navigate(['user/profile']);
    }

}
