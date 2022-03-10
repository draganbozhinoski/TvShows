import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitter'
})
export class SplitterPipe implements PipeTransform {

  transform(value: any,join: string) {
      return value.join(join);
  }

}
