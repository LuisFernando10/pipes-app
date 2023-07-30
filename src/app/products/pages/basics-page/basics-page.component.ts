import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  public lowercase = 'fernando';
  public uppercase = 'FERNANDO';
  public titlecase = 'FerNaNDo cHAMorRo';
}
