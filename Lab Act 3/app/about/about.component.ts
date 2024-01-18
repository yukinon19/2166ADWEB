import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  //String Interpolation

  position = "Graphic Designer";
  work_experience = 6;
  email = "jennapnglnn@gmail.com";
  phone = "0923-724-7200";

  //Image Interpolation/binidng
  imageUrl: string="../assets/jenna.jpg";
  imageW: number = 300;
  imageH: number = 300;
}
