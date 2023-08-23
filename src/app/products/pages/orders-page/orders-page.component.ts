import { Component } from '@angular/core';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styles: [],
})
export class OrdersPageComponent {
  public isUpperCase: boolean = true;

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }
}
