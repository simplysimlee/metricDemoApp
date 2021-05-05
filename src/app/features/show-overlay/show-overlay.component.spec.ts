import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOverlayComponent } from './show-overlay.component';

describe('ShowOverlayComponent', () => {
  let component: ShowOverlayComponent;
  let fixture: ComponentFixture<ShowOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
