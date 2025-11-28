import { Component, signal } from '@angular/core';

import { CalculatriceComponent } from '../calculatrice-component/calculatrice-component';

@Component({
  selector: 'app-root',
  imports: [CalculatriceComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
