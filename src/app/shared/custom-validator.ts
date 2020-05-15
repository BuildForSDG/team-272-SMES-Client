import { FormGroup, ValidatorFn, ValidationErrors } from '@angular/forms';


export const passwordMatchValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const newPasswordControl = control.get('newPassword');
    const confirmPasswordControl = control.get('confirmPassword');

    return newPasswordControl && confirmPasswordControl && newPasswordControl.value ===
    confirmPasswordControl.value ? null : { passwordInvalid: true };
};
