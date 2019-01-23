import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionCarouselComponent } from './contribution-carousel.component';

describe('ContributionCarouselComponent', () => {
  let component: ContributionCarouselComponent;
  let fixture: ComponentFixture<ContributionCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributionCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributionCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
