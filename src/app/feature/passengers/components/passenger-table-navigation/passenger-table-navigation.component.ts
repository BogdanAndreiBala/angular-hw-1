import { Component, EventEmitter, Input, OnDestroy, Output, OnInit } from '@angular/core';
import { PassengerService } from '../../services/passenger.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-passenger-table-navigation',
  templateUrl: './passenger-table-navigation.component.html',
  styleUrl: './passenger-table-navigation.component.scss',
  standalone: false,
})
export class PassengerTableNavigationComponent implements OnInit, OnDestroy {
  public currentPage!: number;
  public totalPages!: number;

  private currentPageSubs: Subscription = new Subscription();
  private totalPagesSubs: Subscription = new Subscription();

  constructor(private passengerService: PassengerService) {}

  ngOnInit(): void {
    this.currentPageSubs = this.passengerService.currentPage$.subscribe(
      (page: number) => (this.currentPage = page),
    );
    this.totalPagesSubs = this.passengerService.totalPages$.subscribe(
      (total: number) => (this.totalPages = total),
    );
  }

  ngOnDestroy(): void {
    this.currentPageSubs.unsubscribe;
    this.totalPagesSubs.unsubscribe;
  }

  public onClickNext() {
    this.passengerService.nextPage();
  }

  public onClickPrev() {
    this.passengerService.prevPage();
  }

  public onClickFirst() {
    this.passengerService.goToFirstPage();
  }

  public onClickLast() {
    this.passengerService.goToLastPage();
  }
}
