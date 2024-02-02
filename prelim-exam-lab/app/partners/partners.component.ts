import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent {

  company = [
    { companyName: 'Microsoft', tradeM: 'Microsoft', tradeMImage: 'https://th.bing.com/th/id/OIP.Eqf4vo8ae5PtwtwRpweRagHaHa?rs=1&pid=ImgDetMain', sponsor: 'Platinum', web: 'https://www.microsoft.com' },
    { companyName: 'Apple, Inc.', tradeM: 'Apple', tradeMImage: 'https://th.bing.com/th/id/OIP.ppHfoiY1wReR944hXWm7wwAAAA?rs=1&pid=ImgDetMain', sponsor: 'Gold', web: 'https://www.apple.com' },
    { companyName: 'Amazon', tradeM: 'Amazon', tradeMImage: 'https://th.bing.com/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?rs=1&pid=ImgDetMain', sponsor: 'Silver', web: 'https://www.amazon.com' },
    { companyName: 'Google, Inc.', tradeM: 'Google', tradeMImage: 'https://th.bing.com/th/id/R.27fa9f7a7ce6789c74f3679be56786c8?rik=WDHNyAbYR8o9ww&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2016%2f11%2fNew-Google-Logo.jpg&ehk=gjUdHM5UOpzw4LQK5sTxmU3og4RMq7V%2fCR4l%2b%2fMJULc%3d&risl=&pid=ImgRaw&r=0', sponsor: 'Bronze', web: 'https://www.google.com' }
];


}
