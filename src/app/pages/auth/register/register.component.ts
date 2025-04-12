import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/ui/button/button.component';
import { InputComponent } from '../../../shared/ui/input/input.component';
import { LogoComponent } from '../../../shared/ui/logo/logo.component';
import { AuthService, UserRole } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    ButtonComponent,
    InputComponent,
    LogoComponent,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  roles: UserRole[] = ['Job Seeker', 'Employer/Recruiter'];
  selectedRole: UserRole = 'Job Seeker';
  registerForm!: FormGroup;
  isLoading = false;
  showTermsError = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      companyName: [''],
      acceptTerms: [false],
    });
  }

  getErrorMessage(field: string): string | undefined {
    return undefined; // No validation in development
  }

  async onSubmit() {
    this.isLoading = true;
    try {
      await this.router.navigate(['/onboarding']);
    } finally {
      this.isLoading = false;
    }
  }

  async signUpWithGoogle() {
    await this.router.navigate(['/onboarding']);
  }

  async signUpWithGithub() {
    await this.router.navigate(['/onboarding']);
  }
}
