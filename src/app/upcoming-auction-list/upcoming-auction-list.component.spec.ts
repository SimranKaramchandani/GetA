import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingAuctionListComponent } from './upcoming-auction-list.component';

describe('UpcomingAuctionListComponent', () => {
  let component: UpcomingAuctionListComponent;
  let fixture: ComponentFixture<UpcomingAuctionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingAuctionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingAuctionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
