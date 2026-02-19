import { Component, Input } from '@angular/core';
import { PassengerData } from '../../../../shared/models/titanic-data.model';

@Component({
  selector: '[app-passenger-row]',
  templateUrl: './passenger-row.component.html',
  styleUrl: './passenger-row.component.scss',
  standalone: false,
})
export class PassengerRowComponent {
  @Input() passenger!: PassengerData;
}
