import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Funder } from '../funder';
import { CrudService } from '../crud.service';
@Component({
  selector: 'app-editfunder',
  templateUrl: './editfunder.component.html',
  styleUrls: ['./editfunder.component.scss']
})
export class EditfunderComponent implements OnInit {
  id: number;
  funder: Funder;

  constructor( 
    private crudService: CrudService,
    private route: ActivatedRoute, 
    private router: Router ) { }

  ngOnInit() {
    this.funder = new Funder();

    this.id = this.route.snapshot.params['id'];

    this.crudService.getFunder(this.id)
      .subscribe(data => {
        console.log(data)
        this.funder = data;
      }, error => console.log(error));
  }

  updateFunder() {
    this.crudService.editFunder(this.id, this.funder)
      .subscribe(data => console.log(data), error => console.log(error));
    this.funder = new Funder();
    this.goToList();
  }

  onSubmit(){
    this.updateFunder();
  }

  goToList(){
    this.router.navigate(['/funders'])
  }

}
