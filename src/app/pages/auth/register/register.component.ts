import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../../shared/ui/button/button.component';
import { InputComponent } from '../../../shared/ui/input/input.component';
import { LogoComponent } from '../../../shared/ui/logo/logo.component';

type UserRole = 'Job Seeker' | 'Employer/Recruiter';

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
  registerForm: FormGroup;
  isLoading = false;
  showTermsError = false;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      companyName: [''],
      acceptTerms: [false, [Validators.requiredTrue]],
    });
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
    try {
      // TODO: Implement registration service call
      console.log('Form submitted:', {
        ...this.registerForm.value,
        role: this.selectedRole,
      });
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
    } finally {
      this.isLoading = false;
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
