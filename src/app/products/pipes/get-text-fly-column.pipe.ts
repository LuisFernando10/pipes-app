import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getTextFlyColumn',
})
export class GetTextFlyColumnPipe implements PipeTransform {
  // 'PipeTransform' es el método que se va a llamar para hacer la transformación visual de la data

  transform(canFly: boolean = false): 'SI' | 'NO' {
    return !canFly ? 'NO' : 'SI';
  }
}
