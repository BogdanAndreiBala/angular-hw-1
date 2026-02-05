import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'city', standalone: false })
export class CityPipe implements PipeTransform {
  private readonly cityNames: Record<string, string> = {
    S: 'Southampton',
    C: 'Cherbourg',
    Q: 'Queenstown',
  };

  transform(value: string | null): string {
    if (!value) {
      return '';
    }

    return this.cityNames[value] || value;
  }
}
