import { Component, OnInit, Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contribution-carousel',
  templateUrl: './contribution-carousel.component.html',
  styleUrls: ['./contribution-carousel.component.scss']
})
export class ContributionCarouselComponent implements OnInit {
  showNavigationArrows = true;
  showNavigationIndicators = false;
  @Input() public data;
  contribution = [];

  constructor(config: NgbCarouselConfig) { 
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit() {
    this.contribution = this.data;
  }

}
