import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerNameHeaderComponent } from './passenger-name-header.component';

describe('PassengerNameHeaderComponent', () => {
  let component: PassengerNameHeaderComponent;
  let fixture: ComponentFixture<PassengerNameHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassengerNameHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengerNameHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
