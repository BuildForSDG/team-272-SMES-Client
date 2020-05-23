import { Component, OnInit } from '@angular/core';
import { RouterModule, Router} from '@angular/router';
import { Observable } from "rxjs";
import { CrudService } from "../crud.service";
import { Funder } from "../funder";
import { FunderdetailsComponent } from '../funderdetails/funderdetails.component';

@Component({
  selector: 'app-funders',
  templateUrl: './funders.component.html',
  styleUrls: ['./funders.component.scss']
})
export class FundersComponent implements OnInit {
  funders: Observable<Funder[]>;

  constructor(
    private crudService: CrudService,
    private router: Router
  ) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.funders = this.crudService.getFunders();
  }

  deleteFunder(id: number) {
    this.crudService.deleteFunder(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  funderdetails(id:number) {
    this.router.navigate(['details', id])
  }
}
