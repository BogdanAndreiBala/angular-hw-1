import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PassengerService, SortType } from '../../services/passenger.service';

@Component({
  selector: 'app-passenger-name-header',
  templateUrl: './passenger-name-header.component.html',
  styleUrl: './passenger-name-header.component.scss',
  standalone: false,
})
export class PassengerNameHeaderComponent {
  sortOrder!: SortType;
  constructor(private passengerService: PassengerService) {}

  public onSortClick(): void {
    this.passengerService.nameSort();
    this.sortOrder = this.passengerService.getSortOrder();
  }
}
