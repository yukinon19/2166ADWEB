import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  product = [ 
    { firstName: 'Muichiro', lastName: 'Tokito', anime: 'Demon Slayer', price: 2500.00 },   
    { firstName: 'Shinobu', lastName: 'Kochou', anime: 'Demon Slapyer', price: 2100.00 }, 
    { firstName: 'Yukino', lastName: 'Yukinoshita', anime: 'Oregairu', price: 1800.00 }, 
    { firstName: 'Yor', lastName: 'Forger', anime: 'SpyXFamily', price: 2900.00 }, 
    { firstName: 'Hitori', lastName: 'Gotou', anime: 'Bocchi the Rock!', price: 2500.00},
    { firstName: 'Kita', lastName: 'Ikuyo', anime: 'Bocchi the Rock!', price: 2800.00},
    { firstName: 'Ryou', lastName: 'Yamada', anime: 'Bocchi the Rock!', price: 2200.00},
    { firstName: 'Nijika', lastName: 'Ichiji', anime: 'Bocchi the Rock!', price: 2500.00}
    ];
    
  //Using ngIf to toggle text display
showText: boolean = false;
toggleText() {
    this.showText = !this.showText;
  }
}
