import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardSearch'
})
export class CardSearchPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
