import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styles: [],
})
export class OrdersPageComponent {
  public isUpperCase: boolean = true;
  public heroes: Hero[] = [
    {
      canFly: false,
      color: Color.red,
      name: 'Flash',
    },
    {
      canFly: true,
      color: Color.black,
      name: 'Super Man',
    },
    {
      canFly: false,
      color: Color.green,
      name: 'Hulk',
    },
    {
      canFly: true,
      color: Color.black,
      name: 'BathMan',
    },
    {
      canFly: false,
      color: Color.blue,
      name: 'Robin',
    },
  ];

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }
}
