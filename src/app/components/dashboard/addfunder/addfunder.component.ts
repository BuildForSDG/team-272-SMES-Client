import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CrudService } from '../crud.service';
import { Funder } from '../funder';

@Component({
  selector: 'app-addfunder',
  templateUrl: './addfunder.component.html',
  styleUrls: ['./addfunder.component.scss']
})
export class AddfunderComponent implements OnInit {
  funder: Funder = new Funder ();
  submitted = false;

  constructor( 
    private crudService: CrudService,
    private router: Router ) { }

  ngOnInit() {
  }

  newFunder(): void{
    this.submitted = false;
    this.funder = new Funder();
  }

  save() {
    this.crudService.createFunder(this.funder)
      .subscribe(data => console.log(data), error => console.log(error));
    this.funder = new Funder();
    this.goToList();
    }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goToList() {
    this.router.navigate(['/funders']);
  }
}
