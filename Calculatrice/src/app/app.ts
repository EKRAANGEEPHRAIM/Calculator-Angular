import { Component, } from '@angular/core';
import { KeyTouch } from '../key-touch/key-touch';




@Component({
  selector: 'app-root',
  imports: [
  KeyTouch
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
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
      // eval prend une string et exécute l'expression dedans
    } catch (e) {
      this.display = 'Erreur';
    }
  }




}

 
