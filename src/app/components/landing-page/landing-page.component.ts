import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {

  
  date = new Date();

  title = 'Herodha';
  showLogin = true;
  regFormVisible = false;

  toggleForm() {
    this.showLogin = !this.showLogin;
  }
  showForm(formVisible: boolean) {
    this.regFormVisible = formVisible;
  }
  showRegForm(formVisible: boolean) {
    this.regFormVisible = formVisible;
  }
}
