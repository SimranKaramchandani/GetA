import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaraosalComponent } from './caraosal.component';

describe('CaraosalComponent', () => {
  let component: CaraosalComponent;
  let fixture: ComponentFixture<CaraosalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaraosalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaraosalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
