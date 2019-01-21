import { Component, OnInit } from '@angular/core';
import { ContributionService } from '../../services/contribution/contribution.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from '../../components/modal-content/modal-content.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  constructor(config: NgbCarouselConfig, private contributionService: ContributionService, private modalService: NgbModal) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = true;
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
  }

  onError(error) {
    console.log(error);
  }

  selectedContribution(contribution) {
    const modalRef = this.modalService.open(ModalContentComponent, { centered: true, size: 'lg' });
    modalRef.componentInstance.userContribution = contribution;
  }

}

