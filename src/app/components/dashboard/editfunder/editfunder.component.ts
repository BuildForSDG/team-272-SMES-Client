import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-editfunder',
  templateUrl: './editfunder.component.html',
  styleUrls: ['./editfunder.component.scss']
})
export class EditfunderComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

}
