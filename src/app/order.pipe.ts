import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order',
  pure: false
})
export class OrderPipe implements PipeTransform {

  transform(value: [any]): any {
    value.sort(
      (a, b) => {
        if (a.name > b.name) {
          return 1
        }
        if (a.name < b.name) {
          return -1
        }
        return 0;
      }
    )

    return value;
  }

}
