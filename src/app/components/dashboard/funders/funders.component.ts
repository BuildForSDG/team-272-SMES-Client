import { Component, OnInit } from '@angular/core';
import { RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-funders',
  templateUrl: './funders.component.html',
  styleUrls: ['./funders.component.scss']
})
export class FundersComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
