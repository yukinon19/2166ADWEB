import { Component } from '@angular/core';
import { Observable, map, interval } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  time$ : Observable<Date>;
  title = 'midterm1';
  presentDate = new Date();
  
  //currency
  a: number = 1.359;
  b: number = 2.6456;

  //decimal
  deci: number = 19.268212

  //JSON
  data: Object = {fname: 'jenna', lname: 'pangilinan', info: {age: 21, grades: [91, 92, 93]}};

  //percentage
  c: number = 0.453457738

  //slice
  letters: string[] = ['j', 'e', 'n', 'a', 'p'];
  name: string = "yunaTheToona"

  constructor(){
    this.time$ = interval(1000).pipe(map(() => new Date()))
  }
}
