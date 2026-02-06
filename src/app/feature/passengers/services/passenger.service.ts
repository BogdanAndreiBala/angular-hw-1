import { Injectable } from '@angular/core';
import { PassengerData } from '../../../shared/models/titanic-data.model';
import { TITANIC_PASSENGERS } from '../../../shared/titanic-data';
import { BehaviorSubject, Observable } from 'rxjs';

const FIRST_PAGE: number = 1;
const ITEMS_PER_PAGE: number = 50;

@Injectable({
  providedIn: 'root',
})
export class PassengerService {
  private allPassengers: PassengerData[] = TITANIC_PASSENGERS;
  private currentPage: number = FIRST_PAGE;
  private itemsPerPage: number = ITEMS_PER_PAGE;
  private passengersSubject = new BehaviorSubject<PassengerData[]>([]);

  public passengers$: Observable<PassengerData[]> = this.passengersSubject.asObservable();

  constructor() {
    this.updateState();
  }

  public nextPage(): void {
    if (this.currentPage < this.getTotalPages()) {
      this.currentPage++;
      this.updateState();
    }
  }

  public prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateState();
    }
  }

  public goToFirstPage(): void {
    this.currentPage = 1;
    this.updateState();
  }

  public goToLastPage(): void {
    this.currentPage = this.getTotalPages();
    this.updateState();
  }

  public getTotalPages(): number {
    return Math.ceil(this.allPassengers.length / this.itemsPerPage);
  }

  public getCurrentPage(): number {
    return this.currentPage;
  }

  updateState(): void {
    const startIndex: number = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex: number = startIndex + this.itemsPerPage;
    const pageData: PassengerData[] = this.allPassengers.slice(startIndex, endIndex);
    this.passengersSubject.next(pageData);
  }
}
