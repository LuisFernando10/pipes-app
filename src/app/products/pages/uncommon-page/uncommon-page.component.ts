import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = { male: 'invitarlo', female: 'invitarla' };

  changeClient(): void {
    this.name = 'Natalia';
    this.gender = 'female';
  }

  // i18n Plural
  public clients = ['María', 'Andrés', 'Natalia', 'Misael', 'Fernando'];
  public clientsMap = {
    '=0': 'NO hay clientes en espera.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  deleteClient(): void {
    this.clients.shift();
  }

  // keyValue
  public person = { name: 'Fernando', age: 27, address: 'Aracajú, BR' };

  // Async
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    // 'interval()' crea un observable de tipo numérico incrementable (0,1,2,3,...) cada cierto periodo de tiempo
    tap((val) => console.log(val))
  );

  // NOTA: Al usar el 'Async pipe' en una promesa, la promesa NO se puede cancelar (esta es la diferencia de un Observable)
  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos Data en la promesa.');
    }, 3500);
  });
}
