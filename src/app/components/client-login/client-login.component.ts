import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css'],
})
export class ClientLoginComponent {
  loginForm: FormGroup;
  loginStatus: string = '';

  constructor(private fb: FormBuilder, private clientService: ClientService,private router:Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginStatus = 'Please enter valid credentials';
      return;
    }

    const { username, password } = this.loginForm.value;

    if (this.clientService.verifyCredentials(username, password)) {
      this.loginStatus = 'Login Successful!';
      // redirect to a different page
      this.router.navigate(['/home'])
    } else {
      this.loginStatus = 'Invalid username or password';
    }
  }
}
