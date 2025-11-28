import { Component } from '@angular/core';

@Component({
  selector: 'app-calculatrice-component',
  imports: [],
  templateUrl: './calculatrice-component.html',
  styleUrl: './calculatrice-component.css',
})
export class CalculatriceComponent {

 display: string = '';

  press(key: string) {
    this.display += key;
  }

  clear() {
    this.display = '';
  }

  calculate() {
    try {
      this.display = eval(this.display).toString();
    } catch (e) {
      this.display = 'Erreur';
    }
  }


  
}
