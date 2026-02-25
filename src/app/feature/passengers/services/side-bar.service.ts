import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SideBarService {
  private isOpensubject = new BehaviorSubject<boolean>(false);
  public isOpen$ = this.isOpensubject.asObservable();

  public toggle(): void {
    this.isOpensubject.next(!this.isOpensubject.getValue());
  }
}
