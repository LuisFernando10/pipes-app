import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase',
})
export class ToggleCasePipe implements PipeTransform {
  // 'PipeTransform' es el método que se va a llamar para hacer la transformación visual de la data

  transform(value: string, toUpper: boolean = false): string {
    return !toUpper ? value.toLocaleLowerCase() : value.toUpperCase();
  }
}
