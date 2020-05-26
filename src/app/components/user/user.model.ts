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
    newPassword?: string;
    confirmPassword?: string;
}

export interface IUser {
    username: string;
    email: string;
}


export interface ICompleteSMEProfile {
    directors: IManagement[];
    guarantors: IManagement[];
    lenders: IManagement[];
    shareholders: IManagement[];
    banks: string[];
    dateOfOps: Date;
    employees: number;
    loanAmount: number;
    total: number;
    contribution: number;
    description: string;
    jobs: number;
    acknowledgement: boolean;

}

export interface IManagement {
    fullName: string;
    Id: string;
    physicalAddress: string;
    phone: string;
    email: string;
    share?: number;
}

export class User {
  token?: string;
  fullName?: string;
  physicalAddress?: string;
  country?: string;
  phone?: string;
  email?: string;
  businessName?: string;
  businessNumber?: string;
  dateOfReg?: Date;
  regAddress?: string;
  businessEmail?: string;
  businessTel?: string;
  website?: string;
  businessNature?: string;
  newPassword?: string;
}
