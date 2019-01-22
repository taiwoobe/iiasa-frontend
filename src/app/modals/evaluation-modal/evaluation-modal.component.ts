import { Component, OnInit, Input } from '@angular/core';
import { NgbCarouselConfig, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ContributionService } from 'src/app/services/contribution/contribution.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { options } from '../../config/constants';

@Component({
  selector: 'app-evaluation-modal',
  templateUrl: './evaluation-modal.component.html',
  styleUrls: ['./evaluation-modal.component.scss'],
  providers: [NgbCarouselConfig]
})
export class EvaluationModalComponent implements OnInit {
  showNavigationArrows = true;
  showNavigationIndicators = false;
  @Input() public userContribution;
  model: object = {
    evaluation: '',
    comment: ''
  }
  status: string = "";
  loading: boolean = false;
  isSubmitted = false;
  evaluationOptions = options.EVALUATION_TYPES;

  constructor(config: NgbCarouselConfig, public activeModal: NgbActiveModal, private contributionService: ContributionService, private http: HttpClient) { 
    this.setCarouselConfig(config);
  }

  ngOnInit() {}

  setCarouselConfig = (config) => {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  sendEvaluation = (e) => {
    if (e.form.valid) {
      this.submitEvaluation(e.value);
    }
    this.resetForm(e);
  }

  // send evaluation details to endpoint 
  submitEvaluation = (evaluate) => {
    this.loading = true;
    this.contributionService.evaluateContribution(evaluate).subscribe((data: any) => {
      this.loading = false;
      this.isSubmitted = true;
      this.status = "Evaluation has been sent successfully.";
      error => console.log(error);
    });
  }

  // Method to reset the form after sending data
  resetForm = (form:NgForm):void => {
    this.status = "";
    form.reset();
  }

}
