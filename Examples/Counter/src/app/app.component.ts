import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count:number = 0;
  isDisabled = false;
  evenFlag = true;
  isEven = "Even"
  checkEvenOdd()
  {
     if(this.count % 2 == 1) {this.isEven = "Odd";this.evenFlag = false;}
     else { this.isEven = "Even"; this.evenFlag = true}
  }
  increase()
  {
    if (this.count >=20){
      this.isDisabled = true;
    }
    else {
      this.count++
    }
    this.checkEvenOdd()
  }
  decrease(){
    this.count--;
    this.checkEvenOdd()
  }
  reset(){
    this.count = 0;
  }
}
