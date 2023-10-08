import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
counterNumber:number= 0;

increment() {
  this.counterNumber += 1;
}

decrement() {
  this.counterNumber -=1;
}
}
