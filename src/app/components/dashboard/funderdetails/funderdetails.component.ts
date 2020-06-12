import { Component, OnInit, Input } from '@angular/core';
import { Funder } from '../funder';
import { CrudService } from '../crud.service';
import { FundersComponent } from '../funders/funders.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-funderdetails',
  templateUrl: './funderdetails.component.html',
  styleUrls: ['./funderdetails.component.scss']
})
export class FunderdetailsComponent implements OnInit {
  id: number;
  funder: Funder;

  constructor(
    private crudService: CrudService,
    private route: ActivatedRoute, 
    private router: Router ) { }


  ngOnInit(): void {
    this.funder = new Funder();

    this.id = this.route.snapshot.params['id'];

    this.crudService.getFunder(this.id)
      .subscribe(data => {
        console.log(data)
        this.funder = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['funders'])
  }

}
