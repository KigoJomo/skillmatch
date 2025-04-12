import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rememberMe: [false],
    });

    // Redirect if already logged in
    if (this.authService.currentUser) {
      this.navigateAfterAuth();
    }
  }

  getErrorMessage(field: string): string | undefined {
    const control = this.loginForm.get(field);
    if (!control?.errors || !control.touched) return undefined;

    if (control.errors['required']) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    }
    if (control.errors['email']) {
      return 'Please enter a valid email address';
    }
    if (control.errors['minlength']) {
      return 'Password must be at least 8 characters';
    }

    return undefined;
  }

  async onSubmit() {
    if (this.loginForm.invalid) {
      Object.keys(this.loginForm.controls).forEach((key) => {
        const control = this.loginForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
      return;
    }

    this.isLoading = true;
    this.error = null;

    try {
      await this.authService.login(
        this.loginForm.value.email,
        this.loginForm.value.password
      );
      await this.navigateAfterAuth();
    } catch (err) {
      this.error = 'Invalid email or password';
    } finally {
      this.isLoading = false;
    }
  }

  private async navigateAfterAuth() {
    const user = this.authService.currentUser;
    if (!user) return;

    if (!user.hasCompletedOnboarding) {
      await this.router.navigate(['/onboarding']);
    } else if (user.role === 'Job Seeker') {
      await this.router.navigate(['/dashboard/seeker']);
    } else {
      await this.router.navigate(['/dashboard/employer']);
    }
  }

  async signInWithGoogle() {
    // TODO: Implement Google sign-in
    console.log('Sign in with Google');
  }

  async signInWithGithub() {
    // TODO: Implement GitHub sign-in
    console.log('Sign in with GitHub');
  }
}
