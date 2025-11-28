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
      this.display = eval(this.display).toString();//eval() takes a string and executes it as JavaScript code.
      //So if this.display contains "2+3*4", eval will compute the result 14
    } catch (e) {
      this.display = 'Erreur';
    }
  }


  
}
