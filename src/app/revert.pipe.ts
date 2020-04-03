import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'revert'
})
export class RevertPipe implements PipeTransform {

  transform(value: string): any {
    return value.split("").reverse().join("");;
  }

}
