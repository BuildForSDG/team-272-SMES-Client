import { SideNavService } from './../../services/side-nav.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-side-nav-toggler',
  templateUrl: './side-nav-toggler.component.html',
  styleUrls: ['./side-nav-toggler.component.scss']
})
export class SideNavTogglerComponent implements OnInit {

  constructor(public sideNavService: SideNavService) { }

  ngOnInit(): void {
  }

}
