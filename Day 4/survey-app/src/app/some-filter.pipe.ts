import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'someFilter'
})
export class SomeFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter(item => item.pro === args);
  }

}
