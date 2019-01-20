import { Component, OnInit } from '@angular/core';
import { ContributionService } from '../../services/contribution/contribution.service';

@Component({
  selector: 'app-contributions',
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.scss']
})
export class ContributionsComponent implements OnInit {

  // Defining the contributions variable as an Array of Objects 
  contributions: Array<object> = [];

  constructor(private contributionService: ContributionService) { }

  ngOnInit() {
    this.getContributions();
  }

  private getContributions = () => {
    this.contributionService.getContributions().subscribe((data) => this.onSuccess(data.body),
      (error) => this.onError(error));
  }

  onSuccess(data: Object[]) {
    this.contributions = data;
    console.log(this.contributions);
  }

  onError(error) {
    console.log(error);
  }

}

