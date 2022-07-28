import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoApp';
  result : number = 0

  val1:number=0;
  val2:number=0;

  add(){

  this.result= this.val1+this.val2
  }
}
