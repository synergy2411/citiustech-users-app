import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // pure : false
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<{label : string, status : string}>, filteredStatus : string): Array<{label : string, status : string}> | null {
    console.log("[TRANSFORM]")
    if(value.length > 0 && filteredStatus === ''){
      return value;
    }
    let result : Array<{label : string, status : string}> = [];
    for(let todo of value){
      if(todo.status === filteredStatus){
        result.push(todo)
      }
    }
    return result;
  }

}

// Create a pipe which will sort the array values

// transform(todoColl: any[], order : string){

//   if(order === 'ASC'){
//     todoColl.sort((a,b) => a.label - b.label)
//   }else if (order === 'DESC') {
//     todoColl.sort((a,b) => b.label - a.label)
//   }else{
//     return todoColl;
//   }

// }
