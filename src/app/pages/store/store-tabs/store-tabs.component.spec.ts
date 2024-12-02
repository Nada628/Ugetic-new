import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreTabsComponent } from './store-tabs.component';

describe('StoreTabsComponent', () => {
  let component: StoreTabsComponent;
  let fixture: ComponentFixture<StoreTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreTabsComponent]
    });
    fixture = TestBed.createComponent(StoreTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
