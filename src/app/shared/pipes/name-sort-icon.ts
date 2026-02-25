import { Pipe, PipeTransform } from '@angular/core';
import { SortType } from '../../feature/passengers/services/passenger.service';

@Pipe({
  name: 'sortIcon',
  standalone: false,
})
export class SortIconPipe implements PipeTransform {
  transform(value: SortType): string {
    switch (value) {
      case 'ASC':
        return '(ASC)';
      case 'DESC':
        return '(DESC)';
      case 'NONE':
        return '(NONE)';
      default:
        return '(NONE)';
    }
  }
}
