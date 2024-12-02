import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EomSliderComponent } from './eom-slider.component';

describe('EomSliderComponent', () => {
  let component: EomSliderComponent;
  let fixture: ComponentFixture<EomSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EomSliderComponent]
    });
    fixture = TestBed.createComponent(EomSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
