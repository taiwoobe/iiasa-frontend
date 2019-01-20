import { Component, OnInit } from '@angular/core';
import { ContributionsService } from '../../services/contributions.service';

@Component({
  selector: 'app-contributions',
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.scss']
})
export class ContributionsComponent implements OnInit {

  private contributions:  Array<object> = [];

  constructor(private  contributionsService:  ContributionsService) { }

  ngOnInit() {
    this.getContributions();
  }

  getContributions() {
    this.contributionsService.getContributions().subscribe((data: Array<object>) => {
      this.contributions = data;
      console.table(data);
    });
  }

}
