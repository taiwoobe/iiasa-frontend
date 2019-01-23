import { Component, OnInit, Input } from '@angular/core';
import { EvaluationModalComponent } from '../../modals/evaluation-modal/evaluation-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contribution',
  templateUrl: './contribution.component.html',
  styleUrls: ['./contribution.component.scss']
})
export class ContributionComponent implements OnInit {
  @Input() public data;
  contribution = [];

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.contribution = this.data;
  }

    // Passing the selected Contribution to the Modal Component
    selectedContribution = (contribution) => {
      const modalRef = this.modalService.open(EvaluationModalComponent, { centered: true, size: 'lg' });
      modalRef.componentInstance.userContribution = contribution;
    }

}
