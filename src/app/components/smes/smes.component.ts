import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-smes',
  templateUrl: './smes.component.html',
  styleUrls: ['./smes.component.scss']
})
export class SmesComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
