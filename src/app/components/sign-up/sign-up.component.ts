import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
    signUpForm: FormGroup
    mouseOver: boolean
    private fullName: FormControl
    private address: FormControl
    private country: FormControl
    private phone: FormControl
    private email: FormControl
    constructor() { }

    ngOnInit() {
        this.fullName = new FormControl('', [Validators.required])
        this.address = new FormControl('', [Validators.required])
        this.country = new FormControl('', [Validators.required])
        this.phone = new FormControl('', [Validators.required])
        this.email = new FormControl('', [Validators.required])

        this.signUpForm = new FormGroup({
            fullName: this.fullName,
            address: this.address,
            country: this.country,
            phone: this.phone,
            email: this.email
        })
    }

    saveProfile(data) {
        if (this.signUpForm.valid) {
            console.log(`form data captured: ${data}`)
        }
    }

    cancel(){
        
    }

}