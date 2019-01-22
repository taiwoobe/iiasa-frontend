import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output()
  public onFilter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // Method to be emmitted to the parent component
  filterSelected = (e) => {
    this.onFilter.emit({
      dir: e.target.value
    });
  }

}
