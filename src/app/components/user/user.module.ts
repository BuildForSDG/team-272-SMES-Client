import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SignUpService, SignUpComponent } from './sign-up';
import { ProfileComponent } from '../../shared/components/profile/index';
import { CompleteProfileComponent } from '../../shared/components/profile/index';
import { ViewToggleDirective } from './common/view-toggle.directive';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

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
        FontAwesomeModule,
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

export class UserModule {
    constructor(library: FaIconLibrary) {
        library.addIconPacks(fas);
    }
}
