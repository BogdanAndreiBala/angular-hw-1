import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PassengerTableComponent } from './feature/passengers/components/passenger-table/passenger-table.component';
import { PassengerDetailsComponent } from './feature/passengers/components/passenger-details/passenger-details.component';

const routes: Routes = [
  { path: '', component: PassengerTableComponent },
  { path: 'passenger/:id', component: PassengerDetailsComponent },
  {
    path: 'statistics',
    loadChildren: () =>
      import('./feature/passengers/statistics/statistics-module').then((m) => m.StatisticsModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
