import { Component, OnInit, Input } from '@angular/core';
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

  constructor(config: NgbCarouselConfig, public activeModal: NgbActiveModal) { 
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit() {
  }

  onQualitySelect(event) {
    this.selectedQuality = event.target.value;
    console.log(this.selectedQuality);
}


}
