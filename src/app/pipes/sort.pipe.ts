import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(todoColl: any[], order: string) {
    if (order === 'ASC') {
      return todoColl.sort((a, b) => {
        let labelA = a.label.toLowerCase();
        let labelB = b.label.toLowerCase();
        if(labelA < labelB){
          return -1
        }
      });
    } else if (order === 'DESC') {
      return todoColl.sort((a, b) => {
        let labelA = a.label.toLowerCase();
        let labelB = b.label.toLowerCase();
        if(labelA > labelB){
          return -1
        }
      });
    } else {
      return todoColl;
    }
  }
}
