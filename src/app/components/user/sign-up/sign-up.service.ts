import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser, ISignUp } from '../user.model';

@Injectable()

export class SignUpService {
    currentUser: IUser;

    saveUserInfo(data: ISignUp) {
        console.log(`Data ${data}`);
        return true;
    }

}
