import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContributionService } from '../../services/contribution/contribution.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { orderBy } from 'lodash';

@Component({
  selector: 'app-contributions',
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.scss'],
  providers: [NgbCarouselConfig]
})

export class ContributionsComponent implements OnInit, OnDestroy {
  loading = true;

  // Defining the contributions variable as an Array of Objects 
  contributions: Array<object> = [];
  private ngUnsubscribe = new Subject();

  constructor(private contributionService: ContributionService) {}

  ngOnInit() {
    this.getContributions();
  }

  // Method to get all contributions
  private getContributions = (dir = 'desc') => {
    this.contributions = [], this.loading = true;
    this.contributionService.getContributions()
    .pipe(takeUntil(this.ngUnsubscribe))
    .pipe(map((data)=> orderBy(data.body, ['timestamp'], [dir])))
    .subscribe(
      (data) => this.onSuccess(data),
      (error) => this.onError(error),
      () => (this.loading = false)
    );
  }

  onSuccess = (data: Object[]) => {
    this.contributions = data;
  }

  onError = (error) => {
    console.log(error);
  }

  ngOnDestroy(): any {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  // Method to perform sorting of data based on entry date
  onFilterSelected = (e):void => {
    this.getContributions(e.dir);
  }

}

