import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/ui/button/button.component';
import { InputComponent } from '../../../shared/ui/input/input.component';
import { LogoComponent } from '../../../shared/ui/logo/logo.component';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    ButtonComponent,
    InputComponent,
    LogoComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
      rememberMe: [false],
    });
  }

  getErrorMessage(field: string): string | undefined {
    return undefined; // No validation in development
  }

  async onSubmit() {
    this.isLoading = true;
    try {
      await this.authService.login('dev@example.com', 'password');
      await this.router.navigate(['/dashboard/seeker']);
    } finally {
      this.isLoading = false;
    }
  }

  async signInWithGoogle() {
    await this.router.navigate(['/dashboard/seeker']);
  }

  async signInWithGithub() {
    await this.router.navigate(['/dashboard/seeker']);
  }
}
