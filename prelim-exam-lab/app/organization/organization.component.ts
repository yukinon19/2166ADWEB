import { Component } from '@angular/core';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent {
  showPopupMessage: boolean = false;

  showPopup() {
    this.showPopupMessage = true;
  }

  closePopup() {
    this.showPopupMessage = false;
  }
}
