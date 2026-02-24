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

  private refresh() {
    this.currentPage = this.passengerService.getCurrentPage();
    this.totalPages = this.passengerService.getTotalPages();
    this.currentSortOrder = this.passengerService.getSortOrder();
  }
}
