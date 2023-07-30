import { Component } from '@angular/core';

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
}
