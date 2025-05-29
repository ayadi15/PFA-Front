// src/app/login/login.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  onSubmit(): void {
    console.log('Form submitted with:', { username: this.username, password: this.password });
    // Replace this with actual authentication logic (e.g., API call)
  }
}