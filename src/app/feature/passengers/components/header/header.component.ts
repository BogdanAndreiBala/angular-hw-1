import { Component } from '@angular/core';
import { SideBarService } from '../../services/side-bar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: false,
})
export class HeaderComponent {
  constructor(public sidebarService: SideBarService) {}

  public toggleSidebar(): void {
    this.sidebarService.toggle();
  }
}
