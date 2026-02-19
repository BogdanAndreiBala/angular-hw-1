import { Injectable } from '@angular/core';
import { PassengerData } from '../../../shared/models/titanic-data.model';
import { TITANIC_PASSENGERS } from '../../../shared/titanic-data';
import { BehaviorSubject, Observable } from 'rxjs';

const FIRST_PAGE: number = 1;
const ITEMS_PER_PAGE: number = 50;
export type SortType = 'ASC' | 'DESC' | 'NONE';

@Injectable({
  providedIn: 'root',
})
export class PassengerService {
  private allPassengers: PassengerData[] = [...TITANIC_PASSENGERS];
  private currentPage: number = FIRST_PAGE;
  private itemsPerPage: number = ITEMS_PER_PAGE;
  private passengersSubject = new BehaviorSubject<PassengerData[]>([]);
  private currentPageSubject = new BehaviorSubject<number>(this.currentPage);
  private totalPagesSubject = new BehaviorSubject<number>(this.getTotalPages());

  private currentSortOrder: SortType = 'NONE';

  public passengers$: Observable<PassengerData[]> = this.passengersSubject.asObservable();
  public currentPage$: Observable<number> = this.currentPageSubject.asObservable();
  public totalPages$: Observable<number> = this.totalPagesSubject.asObservable();
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
    this.currentPageSubject.next(this.currentPage);
    this.totalPagesSubject.next(this.getTotalPages());
  }

  public nameSort(): void {
    if (this.currentSortOrder === 'NONE') {
      this.currentSortOrder = 'ASC';
    } else if (this.currentSortOrder === 'ASC') {
      this.currentSortOrder = 'DESC';
    } else {
      this.currentSortOrder = 'NONE';
    }

    this.sortPassengers();
    this.currentPage = 1;
    this.updateState();
  }

  private sortPassengers(): void {
    if (this.currentSortOrder === 'NONE') {
      this.allPassengers.sort((a, b) => a.passengerId - b.passengerId);
    } else {
      this.allPassengers.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameA < nameB) {
          return this.currentSortOrder === 'ASC' ? -1 : 1;
        }
        if (nameA > nameB) {
          return this.currentSortOrder === 'ASC' ? 1 : -1;
        }
        return 0;
      });
    }
  }

  public getSortOrder(): SortType {
    return this.currentSortOrder;
  }

  public getPassenger(id: number): PassengerData | undefined {
    return this.allPassengers.find((p) => p.passengerId === id);
  }
}
