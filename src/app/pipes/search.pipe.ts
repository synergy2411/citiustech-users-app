import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products : Array<{id, cost, qunatity, name}>, query: string): Array<{id, cost, qunatity, name}> {

    if(products.length >= 0 && query === ''){
      return products
    }

    let resultArray : Array<{id, cost, qunatity, name}>= []
    for(let product of products){
      if(product.name.toLowerCase().includes(query.toLowerCase())){
        resultArray.push(product)
      }
    }
    return resultArray;
  }

}
