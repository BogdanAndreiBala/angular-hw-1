import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SortType } from '../../services/passenger.service';

@Component({
  selector: 'app-passenger-name-header',
  templateUrl: './passenger-name-header.component.html',
  styleUrl: './passenger-name-header.component.scss',
  standalone: false,
})
export class PassengerNameHeaderComponent {
  @Input() public sortOrder: SortType = 'NONE';
  @Output() public sort = new EventEmitter<void>();

  public onSortClick(): void {
    this.sort.emit();
  }
}
