import { Component, OnInit } from '@angular/core';
import { ContributionsService } from '../../services/contributions.service';

@Component({
  selector: 'app-contributions',
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.scss']
})
export class ContributionsComponent implements OnInit {

  // Defining the contributions variable as an Array of Objects 
  contributions: Object[];

  constructor(private  contributionsService:  ContributionsService) { }

  ngOnInit() {
    this.getContributions();
  }

  getContributions() {
    this.contributionsService.getContributions().subscribe((data: Object[]) => {
      this.contributions = data;
      console.log(this.contributions);
    });
  }

}
