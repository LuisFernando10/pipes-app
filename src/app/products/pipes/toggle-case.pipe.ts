import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase',
})
export class ToggleCasePipe implements PipeTransform {
  // 'PipeTransform' es el método que se va a llamar para hacer la transformación visual de la data

  transform(value: string): string {
    return value.toUpperCase();
  }
}
