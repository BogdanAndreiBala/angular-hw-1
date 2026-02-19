import { Component, OnInit } from '@angular/core';
import { StatisticsService, Statistics } from '../../services/statistics.service';

@Component({
  selector: 'app-statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrl: './statistics-page.component.scss',
  standalone: false,
})
export class StatisticsPageComponent implements OnInit {
  public generalStats: Statistics[] = [];
  public genderStats: Statistics[] = [];
  public classStats: Statistics[] = [];

  constructor(private statsService: StatisticsService) {}

  ngOnInit(): void {
    this.generalStats = this.statsService.getGeneralStats();
    this.genderStats = this.statsService.getGenderStats();
    this.classStats = this.statsService.getClassStats();
  }
}
