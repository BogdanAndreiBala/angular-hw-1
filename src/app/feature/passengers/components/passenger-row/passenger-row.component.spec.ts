import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerRowComponent } from './passenger-row.component';

describe('PassengerRowComponent', () => {
  let component: PassengerRowComponent;
  let fixture: ComponentFixture<PassengerRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassengerRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengerRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
