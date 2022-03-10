import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'missing'
})
export class MissingPipe implements PipeTransform {

  transform(value:string,callback:string): string {
    if(value){
      return value;
    }
    else{
      return callback;
    }
  }

}
