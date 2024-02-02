import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  loc1 = 'France';
  loc2 = 'Seoul';
  loc3 = 'San Francisco';
  loc4 = 'Boston';

  fTopic = 'Architecture and Fine Arts';
  sTopic = 'Humanities and Arts';
  sfTopic = 'Science and Techonology';
  bTopic = 'Engineering and Tech';

  ce = 'Cultural Events';
  ss = 'Safety and Security';
  lm = 'Learn more';
  
}
