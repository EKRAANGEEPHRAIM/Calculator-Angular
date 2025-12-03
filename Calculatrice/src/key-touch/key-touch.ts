
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-key-touch',
  imports: [

  ],
  templateUrl: './key-touch.html',
  styleUrl: './key-touch.css',
})
export class KeyTouch {
 @Input() affiche = '' ;
@Output() touchPress = new EventEmitter<string>();
@Output() clearPress = new EventEmitter<void>();
@Output() egalPress = new EventEmitter<void>();



  touchs =  [
    ['7','8','9','/'],
    ['4','5','6','*'],
    ['1','2','3','-'],
    ['0','.','=','+'],
    ['C']
  ]; // number inside an array


 PressTo(key : string) {
if( key  === 'C'){
  return this.clearPress.emit();
}

if( key === '='){
return this.egalPress.emit();
} 

  this.touchPress.emit(key);
 }

}
