import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-passenger-table-navigation',
  templateUrl: './passenger-table-navigation.component.html',
  styleUrl: './passenger-table-navigation.component.scss',
  standalone: false,
})
export class PassengerTableNavigationComponent {
  @Input() public currentPage!: number;
  @Input() public totalPages!: number;

  @Output() public fisrt = new EventEmitter<void>();
  @Output() public last = new EventEmitter<void>();
  @Output() public next = new EventEmitter<void>();
  @Output() public prev = new EventEmitter<void>();

  public onClickNext() {
    this.next.emit();
  }

  public onClickPrev() {
    this.prev.emit();
  }

  public onClickFirst() {
    this.fisrt.emit();
  }

  public onClickLast() {
    this.last.emit();
  }
}
