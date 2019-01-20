import { Component, OnInit } from '@angular/core';
import { ContributionService } from '../../services/contribution/contribution.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contributions',
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.scss'],
  providers: [NgbCarouselConfig]
})
export class ContributionsComponent implements OnInit {
  showNavigationArrows = true;
  showNavigationIndicators = false;

  // Defining the contributions variable as an Array of Objects 
  contributions: Array<object> = [];

  constructor(config: NgbCarouselConfig, private contributionService: ContributionService) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = true;
   }

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

