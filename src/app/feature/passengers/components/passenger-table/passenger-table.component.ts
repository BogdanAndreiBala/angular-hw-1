import { Component, OnDestroy, OnInit } from '@angular/core';
import { PassengerData } from '../../../../shared/models/titanic-data.model';
import { TITANIC_PASSENGERS } from '../../../../shared/titanic-data';
import { Subscription } from 'rxjs';
import { PassengerService, SortType } from '../../services/passenger.service';

@Component({
  selector: 'app-passenger-table',
  templateUrl: './passenger-table.component.html',
  styleUrl: './passenger-table.component.scss',
  standalone: false,
})
<<<<<<< HEAD
export class PassengerTableComponent implements OnInit, OnDestroy {
  public currentPage!: number;
  public totalPages!: number;
  public currentSortOrder: SortType = 'NONE';

  public passengers: PassengerData[] = [];
  private passengersSubscription: Subscription = new Subscription();

  constructor(private passengerService: PassengerService) {}

  ngOnInit(): void {
    this.passengersSubscription = this.passengerService.passengers$.subscribe(
      (data: PassengerData[]) => (this.passengers = data),
    );
    this.refresh();
  }

  ngOnDestroy(): void {
    this.passengersSubscription.unsubscribe();
  }

  public handleNextPage() {
    this.passengerService.nextPage();
    this.refresh();
  }

  public handlePrevPage() {
    this.passengerService.prevPage();
    this.refresh();
  }

  public handleFirstPage() {
    this.passengerService.goToFirstPage();
    this.refresh();
  }

  public handleLastPage() {
    this.passengerService.goToLastPage();
    this.refresh();
  }

  public handleSort() {
    this.passengerService.nameSort();
    this.refresh();
  }

  private refresh() {
    this.currentPage = this.passengerService.getCurrentPage();
    this.totalPages = this.passengerService.getTotalPages();
    this.currentSortOrder = this.passengerService.getSortOrder();
=======
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
>>>>>>> master
  }
}
