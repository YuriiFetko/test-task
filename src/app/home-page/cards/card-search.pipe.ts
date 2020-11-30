import {Pipe, PipeTransform} from '@angular/core';
import {Card} from '../../shared/interfaces';

@Pipe({
  name: 'cardSearch'
})
export class CardSearchPipe implements PipeTransform {

  transform(products: Card[], searchTerm: string, onlyFavorites: boolean = false): Card[] {
    const result: Card[] = products;

    if (!searchTerm) {
      return result;
    }
    return result.filter((product: Card) =>
      `${product.title}`.toLocaleLowerCase().includes(searchTerm.toLowerCase()));
  }
}
