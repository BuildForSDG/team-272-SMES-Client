import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';


export class Funder  {
    id: number;
    organisationName: string;
    sectorOfOperation: string;
    typeOfOrganisation: string;
    contactInformation: number;
    emailAddress: EmailValidator;
    website: string;
    typeOfFunding: string;
    fundingAgencies: string;
    termsConditions: string;
    purposeFunding: string;
    geographicalPreference: string;
    fundingCeiling: number;
    startOngoing: string;
    eligibility: string;
    deadline: Date;

}