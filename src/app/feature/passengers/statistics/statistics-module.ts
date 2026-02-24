import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing-module';
import { StatisticsPageComponent } from '../components/statistics-page/statistics-page.component';
import { StatisticsCardComponent } from '../components/statistics-card/statistics-card.component';

@NgModule({
  declarations: [StatisticsPageComponent, StatisticsCardComponent],
  imports: [CommonModule, StatisticsRoutingModule],
})
export class StatisticsModule {}
