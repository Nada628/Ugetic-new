import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EomTabsComponent } from './eom-tabs.component';

describe('EomTabsComponent', () => {
  let component: EomTabsComponent;
  let fixture: ComponentFixture<EomTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EomTabsComponent]
    });
    fixture = TestBed.createComponent(EomTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
