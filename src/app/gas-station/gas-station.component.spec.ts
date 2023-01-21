import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasStationComponent } from './gas-station.component';

describe('GasStationComponent', () => {
  let component: GasStationComponent;
  let fixture: ComponentFixture<GasStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ GasStationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GasStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
