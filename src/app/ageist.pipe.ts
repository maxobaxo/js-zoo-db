import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: 'ageist',
  pure: false
})
export class AgeistPipe implements PipeTransform {

  transform(input: Animal[], desiredAgeRange) {
    var output: Animal[] = [];
    if (desiredAgeRange==="Young Animals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age < 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredAgeRange==="Mature Animals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age >= 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
