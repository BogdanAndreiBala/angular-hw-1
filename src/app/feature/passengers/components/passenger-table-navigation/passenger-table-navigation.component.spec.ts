import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerTableNavigationComponent } from './passenger-table-navigation.component';

describe('PassengerTableNavigationComponent', () => {
  let component: PassengerTableNavigationComponent;
  let fixture: ComponentFixture<PassengerTableNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassengerTableNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengerTableNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
