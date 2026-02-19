import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'survivor', standalone: false })
export class SurvivorPipe implements PipeTransform {
  transform(value: number): string {
    return value === 1 ? 'survived' : 'deceased';
  }
}
