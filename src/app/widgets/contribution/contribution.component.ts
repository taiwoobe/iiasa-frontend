import { Component, OnInit, Input } from '@angular/core';
import { EvaluationModalComponent } from '../../modals/evaluation-modal/evaluation-modal.component';
import { NgbModal, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contribution',
  templateUrl: './contribution.component.html',
  styleUrls: ['./contribution.component.scss']
})
export class ContributionComponent implements OnInit {
  showNavigationArrows = true;
  showNavigationIndicators = false;
  @Input() public data;
  contribution = [];

  constructor(config: NgbCarouselConfig, private modalService: NgbModal) { 
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

    // Passing the selected Contribution to the Modal Component
    selectedContribution = (contribution) => {
      const modalRef = this.modalService.open(EvaluationModalComponent, { centered: true, size: 'lg' });
      modalRef.componentInstance.userContribution = contribution;
    }

}
