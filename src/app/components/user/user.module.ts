import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SignUpService, SignUpComponent } from './sign-up';
import { ProfileComponent } from './profile';
import { CompleteProfileComponent } from './profile/complete-profile.component';
import { ViewToggleDirective } from './common/view-toggle.directive';

const routes: Routes = [
    { path: 'sign-up', component: SignUpComponent },
    { path: '', redirectTo: 'sign-up' },
    { path: 'profile', component: ProfileComponent }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        SignUpComponent,
        ProfileComponent,
        CompleteProfileComponent,
        ViewToggleDirective
    ],
    providers: [SignUpService]
})

export class UserModule { }
