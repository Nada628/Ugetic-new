import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockFaqComponent } from './block-faq.component';

describe('BlockFaqComponent', () => {
  let component: BlockFaqComponent;
  let fixture: ComponentFixture<BlockFaqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockFaqComponent]
    });
    fixture = TestBed.createComponent(BlockFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
