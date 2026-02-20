import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SideBarService } from '../../services/side-bar.service';

export interface NavItem {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-side-bar-nav',
  templateUrl: './side-bar-nav.component.html',
  styleUrl: './side-bar-nav.component.scss',
  standalone: false,
})
export class SideBarNavComponent implements OnInit, OnDestroy {
  public isSidebarOpen: boolean = false;
  private isOpenSubscription: Subscription = new Subscription();

  public navItems: NavItem[] = [
    { icon: '📋', label: 'Table', route: '' },
    { icon: '📊', label: 'Statistics', route: '/statistics' },
  ];

  constructor(public sidebarService: SideBarService) {}

  ngOnInit(): void {
    this.isOpenSubscription = this.sidebarService.isOpen$.subscribe(
      (status) => (this.isSidebarOpen = status),
    );
  }

  ngOnDestroy(): void {
    this.isOpenSubscription.unsubscribe();
  }

  public toggleSidebar(): void {
    this.sidebarService.toggle();
  }
}
