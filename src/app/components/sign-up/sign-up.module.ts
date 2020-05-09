import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SignUpComponent } from './sign-up.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: SignUpComponent }
]

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [SignUpComponent],
    providers: []
})

export class SignUpModule { }