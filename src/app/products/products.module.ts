import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductsRoutingModule } from './products-routing.module';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { GetTextFlyColumnPipe, ToggleCasePipe, SortByPipe } from './pipes';

@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    OrdersPageComponent,
    UncommonPageComponent,

    // Pipes
    GetTextFlyColumnPipe,
    SortByPipe,
    ToggleCasePipe,
  ],
  imports: [CommonModule, PrimeNgModule, ProductsRoutingModule],
})
export class ProductsModule {}
