import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commaSeparated'
})
export class CommaSeparatedPipe implements PipeTransform {
  transform(value: number): string {
    return value.toLocaleString();
  }
}