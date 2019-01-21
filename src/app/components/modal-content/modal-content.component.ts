import { Component, OnInit, Input, ElementRef, Inject } from '@angular/core';
import { NgbCarouselConfig, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss'],
  providers: [NgbCarouselConfig]
})
export class ModalContentComponent implements OnInit {
  showNavigationArrows = true;
  showNavigationIndicators = false;
  @Input() public userContribution;
  selectedQuality: string = '';
  lat: number;
  lon: number;

  evaluationOptions = [
    { id: 1, name: "Approved"},
    { id: 2, name: "Rejected because of photos"},
    { id: 3, name: "Rejected because of classifications"},
    { id: 4, name: "Rejected because of location"},
    { id: 9, name: "Rejected"}
  ]

  constructor(config: NgbCarouselConfig, public activeModal: NgbActiveModal) { 
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit() {
    console.log(this.userContribution);
    this.lat = parseFloat(this.userContribution.location.lat);
    this.lon = parseFloat(this.userContribution.location.lon);
  }

  onQualitySelect(event) {
    this.selectedQuality = event.target.value;
    console.log(this.selectedQuality);
  }

}
