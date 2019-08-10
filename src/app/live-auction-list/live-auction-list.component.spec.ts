import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveAuctionListComponent } from './live-auction-list.component';

describe('LiveAuctionListComponent', () => {
  let component: LiveAuctionListComponent;
  let fixture: ComponentFixture<LiveAuctionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveAuctionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveAuctionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
