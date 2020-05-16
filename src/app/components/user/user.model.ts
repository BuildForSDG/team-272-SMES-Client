export interface ISignUp {
    fullName: string;
    physicalAddress: string;
    country: string;
    phone: string;
    email: string;
    businessName: string;
    businessNumber: string;
    dateOfReg: Date;
    regAddress: string;
    businessEmail: string;
    businessTel: string;
    website: string;
    businessNature: string;
    newPassword: string;
    confirmPassword: string;
}

export interface IUser {
    username: string;
    fullname: string;
}
