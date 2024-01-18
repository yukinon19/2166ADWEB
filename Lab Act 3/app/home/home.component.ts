import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  demonSlayer1 = 'Tokito Muichiro';
  demonSlayer2 = 'Kochou Shinobu';
  oregairu1 = 'Yukinoshita Yukino';
  spy1 = 'Yor Forger';
  bocchi1 = 'Gotou Hitori (Bocchi)';
  bocchi2 = 'Ikuyo Kita';
  bocchi3 = 'Yamada Ryou';
  bocchi4 = 'Ichiji Nijika';
  haikyu1 = 'Shinsuke Kita';
  haikyu2 = 'Kageyama Tobio';
  jobless1 = 'Roxy Migurdia';
  frieren1 = 'Frieren';

  // Click Count
  clickCount= 0;
  clickMe(){
    this.clickCount++;
  }

  // Reset
  resetClickCount(){
    this.clickCount=0;
  }

}
