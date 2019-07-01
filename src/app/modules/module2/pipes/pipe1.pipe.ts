import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe1'
})
export class Pipe1Pipe implements PipeTransform {

  transform(value: string, length: number, template: string): any {
    if (value.length > length) {
      return `${value.substring(0, length)} ${template}`
    }
    return value;
  }

}
