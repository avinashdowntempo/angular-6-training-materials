import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxVal',
  pure: false
})
export class MaxValPipe implements PipeTransform {

  transform(value: any): any {
    return Math.max(...value);
  }

}
