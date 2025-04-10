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
    // Redirect if already logged in
    if (this.authService.currentUser) {
      this.navigateAfterAuth();
      return;
    }

    this.initForm();
  }

  private initForm() {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      companyName: [''],
      acceptTerms: [false, [Validators.requiredTrue]],
    });

    // Set initial company name validator based on selected role
    if (this.selectedRole === 'Employer/Recruiter') {
      this.registerForm
        .get('companyName')
        ?.setValidators([Validators.required]);
    }
  }

  selectRole(role: UserRole) {
    this.selectedRole = role;
    const companyNameControl = this.registerForm.get('companyName');

    if (role === 'Employer/Recruiter') {
      companyNameControl?.setValidators([Validators.required]);
    } else {
      companyNameControl?.clearValidators();
    }

    companyNameControl?.updateValueAndValidity();
  }

  getErrorMessage(field: string): string | undefined {
    const control = this.registerForm.get(field);
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
    if (this.registerForm.invalid) {
      Object.keys(this.registerForm.controls).forEach((key) => {
        const control = this.registerForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });

      if (!this.registerForm.get('acceptTerms')?.value) {
        this.showTermsError = true;
      }
      return;
    }

    this.isLoading = true;
    this.error = null;

    try {
      await this.authService.register({
        ...this.registerForm.value,
        role: this.selectedRole,
      });
      await this.router.navigate(['/onboarding']);
    } catch (err) {
      this.error = 'Registration failed. Please try again.';
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

  async signUpWithGoogle() {
    // TODO: Implement Google sign-up
    console.log('Sign up with Google');
  }

  async signUpWithGithub() {
    // TODO: Implement GitHub sign-up
    console.log('Sign up with GitHub');
  }
}
