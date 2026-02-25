import { Injectable } from '@angular/core';
import { PassengerData } from '../../../shared/models/titanic-data.model';
import { TITANIC_PASSENGERS } from '../../../shared/titanic-data';

export interface Statistics {
  label: string;
  value: number | string;
}

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  private allPassengers: PassengerData[] = [...TITANIC_PASSENGERS];
  private generalStatistics: Statistics[] = [];
  private genderStatistics: Statistics[] = [];
  private classStatistics: Statistics[] = [];

  private calculateTotalPassengers(): void {
    const total = this.allPassengers.length;
    this.generalStatistics.push({ label: 'Total Passengers', value: total });
  }

  private calculateSurvivors(): void {
    const survivors = this.allPassengers.filter((p) => p.survived).length;
    this.generalStatistics.push({ label: 'Survivors', value: survivors });
  }

  private calculateDeaths(): void {
    const deaths = this.allPassengers.filter((p) => !p.survived).length;
    this.generalStatistics.push({ label: 'Deaths', value: deaths });
  }

  private calculateSurvivalRate(): void {
    const survivors = this.allPassengers.filter((p) => p.survived).length;
    const total = this.allPassengers.length;
    const survivalRate = ((survivors / total) * 100).toFixed(2) + '%';
    this.generalStatistics.push({ label: 'Survival Rate', value: survivalRate });
  }

  private calculateMalePassengers(): void {
    const malePassengers = this.allPassengers.filter((p) => p.sex === 'male').length;
    this.genderStatistics.push({ label: 'Male Passengers', value: malePassengers });
  }

  private calculateFemalePassengers(): void {
    const femalePassengers = this.allPassengers.filter((p) => p.sex === 'female').length;
    this.genderStatistics.push({ label: 'Female Passengers', value: femalePassengers });
  }

  private calculateMaleSurvivors(): void {
    const maleSurvivors = this.allPassengers.filter((p) => p.sex === 'male' && p.survived).length;
    this.genderStatistics.push({ label: 'Male Survivors', value: maleSurvivors });
  }

  private calculateFemaleSurvivors(): void {
    const femaleSurvivors = this.allPassengers.filter(
      (p) => p.sex === 'female' && p.survived,
    ).length;
    this.genderStatistics.push({ label: 'Female Survivors', value: femaleSurvivors });
  }

  private calculateMaleSurvivalRate(): void {
    const maleSurvivors = this.allPassengers.filter((p) => p.sex === 'male' && p.survived).length;
    const malePassengers = this.allPassengers.filter((p) => p.sex === 'male').length;
    const maleSurvivalRate = ((maleSurvivors / malePassengers) * 100).toFixed(2) + '%';
    this.genderStatistics.push({ label: 'Male Survival Rate', value: maleSurvivalRate });
  }

  private calculateFemaleSurvivalRate(): void {
    const femaleSurvivors = this.allPassengers.filter(
      (p) => p.sex === 'female' && p.survived,
    ).length;
    const femalePassengers = this.allPassengers.filter((p) => p.sex === 'female').length;
    const femaleSurvivalRate = ((femaleSurvivors / femalePassengers) * 100).toFixed(2) + '%';
    this.genderStatistics.push({ label: 'Female Survival Rate', value: femaleSurvivalRate });
  }

  private calculate1stClassPassengers(): void {
    const firstClassPassengers = this.allPassengers.filter((p) => p.pclass === 1).length;
    this.classStatistics.push({ label: '1st Class Passengers', value: firstClassPassengers });
  }

  private calculate2ndClassPassengers(): void {
    const secondClassPassengers = this.allPassengers.filter((p) => p.pclass === 2).length;
    this.classStatistics.push({ label: '2nd Class Passengers', value: secondClassPassengers });
  }

  private calculate3rdClassPassengers(): void {
    const thirdClassPassengers = this.allPassengers.filter((p) => p.pclass === 3).length;
    this.classStatistics.push({ label: '3rd Class Passengers', value: thirdClassPassengers });
  }

  private calculate1stClassSurvivors(): void {
    const firstClassSurvivors = this.allPassengers.filter(
      (p) => p.pclass === 1 && p.survived,
    ).length;
    this.classStatistics.push({ label: '1st Class Survivors', value: firstClassSurvivors });
  }

  private calculate2ndClassSurvivors(): void {
    const secondClassSurvivors = this.allPassengers.filter(
      (p) => p.pclass === 2 && p.survived,
    ).length;
    this.classStatistics.push({ label: '2nd Class Survivors', value: secondClassSurvivors });
  }

  private calculate3rdClassSurvivors(): void {
    const thirdClassSurvivors = this.allPassengers.filter(
      (p) => p.pclass === 3 && p.survived,
    ).length;
    this.classStatistics.push({ label: '3rd Class Survivors', value: thirdClassSurvivors });
  }

  private computeGeneralStatistics() {
    this.generalStatistics = [];
    this.calculateTotalPassengers();
    this.calculateSurvivors();
    this.calculateDeaths();
    this.calculateSurvivalRate();
  }

  private computeGenderStatistics() {
    this.genderStatistics = [];
    this.calculateMalePassengers();
    this.calculateFemalePassengers();
    this.calculateMaleSurvivors();
    this.calculateFemaleSurvivors();
    this.calculateMaleSurvivalRate();
    this.calculateFemaleSurvivalRate();
  }

  private computeClassStatistics() {
    this.classStatistics = [];
    this.calculate1stClassPassengers();
    this.calculate2ndClassPassengers();
    this.calculate3rdClassPassengers();
    this.calculate1stClassSurvivors();
    this.calculate2ndClassSurvivors();
    this.calculate3rdClassSurvivors();
  }

  public getGeneralStats(): Statistics[] {
    this.computeGeneralStatistics();
    return this.generalStatistics;
  }

  public getGenderStats(): Statistics[] {
    this.computeGenderStatistics();
    return this.genderStatistics;
  }

  public getClassStats(): Statistics[] {
    this.computeClassStatistics();
    return this.classStatistics;
  }
}
