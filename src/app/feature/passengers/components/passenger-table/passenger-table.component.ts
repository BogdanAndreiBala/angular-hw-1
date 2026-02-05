import { Component } from '@angular/core';
import { PassengerData } from '../../../../shared/models/titanic-data.model';
import { TITANIC_PASSENGERS } from '../../../../shared/titanic-data';

@Component({
  selector: 'app-passenger-table',
  templateUrl: './passenger-table.component.html',
  styleUrl: './passenger-table.component.scss',
  standalone: false,
})
export class PassengerTableComponent {
  public passengers: PassengerData[] = TITANIC_PASSENGERS;
}
