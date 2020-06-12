import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-sme',
  templateUrl: './add-sme.component.html',
  styleUrls: ['./add-sme.component.scss']
})
export class AddSMEComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
