import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

import { HeaderComponent } from './feature/passengers/components/header/header.component';
import { PassengerRowComponent } from './feature/passengers/components/passenger-row/passenger-row.component';
import { PassengerTableComponent } from './feature/passengers/components/passenger-table/passenger-table.component';
import { PassengerTableNavigationComponent } from './feature/passengers/components/passenger-table-navigation/passenger-table-navigation.component';

import { SurvivorPipe } from './shared/pipes/survivor';
import { NamePipe } from './shared/pipes/name';
import { CityPipe } from './shared/pipes/city';
const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PassengerTableComponent,
    PassengerRowComponent,
    PassengerTableNavigationComponent,
    SurvivorPipe,
    NamePipe,
    CityPipe,
  ],
  imports: [BrowserModule, CommonModule, RouterModule.forRoot(routes)],
  providers: [provideBrowserGlobalErrorListeners(), provideZonelessChangeDetection()],
  bootstrap: [AppComponent],
})
export class AppModule {}
