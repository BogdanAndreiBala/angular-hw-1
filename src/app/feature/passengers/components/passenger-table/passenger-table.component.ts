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
  public currentPage: number = 0;
  public itemsPerPage: number = 50;

  public visiblePassengers: PassengerData[] = [];
  public totalPages: number = 0;

  getVisiblePassengers(): PassengerData[] {
    const startIndex = this.currentPage * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.passengers.slice(startIndex, endIndex);
  }

  getTotalPages(): number {
    return Math.ceil(this.passengers.length / this.itemsPerPage);
  }

  nextPage(): void {
    if (this.currentPage < this.getTotalPages() - 1) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage >= 1) {
      this.currentPage--;
    }
  }

  firstPage(): void {
    this.currentPage = 0;
  }

  lastPage(): void {
    this.currentPage = this.getTotalPages() - 1;
  }
}
