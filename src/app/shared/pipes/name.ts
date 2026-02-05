import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'name', standalone: false })
export class NamePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }

    const firstSplit: string[] = value.split(',');
    if (firstSplit.length < 2) {
      return value;
    }

    const lastName: string = firstSplit[0].trim();
    const rest = firstSplit[1];

    const secondSplit: string[] = rest.split('.');
    if (secondSplit.length < 2) {
      return value;
    }

    const title: string = secondSplit[0];
    const firstName: string = secondSplit[1];

    const result: string = `${title}. ${lastName} ${firstName}`;
    return result;
  }
}
