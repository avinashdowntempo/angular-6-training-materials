import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {
  base = 10;
  transform(value: number, base: number): any {
    if (base) {
      if (value < base) {
        return 'Bad';
      } else {
        return 'good';
      }
    } else {
      if (value < this.base) {
        return 'Bad';
      } else {
        return 'good';
      }
    }

  }

}
