import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricScoreComponent } from './metric-score.component';

describe('MetricScoreComponent', () => {
  let component: MetricScoreComponent;
  let fixture: ComponentFixture<MetricScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetricScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
