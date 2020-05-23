import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addfunder',
  templateUrl: './addfunder.component.html',
  styleUrls: ['./addfunder.component.scss']
})
export class AddfunderComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

}
