import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name : 'nationalCode'
})
export class NationalCodePipe implements PipeTransform{
  transform(value: any, code : string, flag : boolean) {
    switch (code) {
      case 'USA': return "+1 " + value
      case 'EUR': return "+21 " + value
      case 'AUS': return "+31 " + value
      default: return "+91 " + value
    }
  }

}


// Create reverse pipe to reverse the string
//  abcxyz -> zyxcba

// return value.split('').reverse().join('')
