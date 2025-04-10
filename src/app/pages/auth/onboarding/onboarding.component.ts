import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../../shared/ui/button/button.component';
import { InputComponent } from '../../../shared/ui/input/input.component';
import { Router } from '@angular/router';

interface OnboardingStep {
  id: number;
  title: string;
  description: string;
}

type UserRole = 'Job Seeker' | 'Employer/Recruiter';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent, InputComponent],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.css',
})
export class OnboardingComponent {
  currentStep = 1;
  totalSteps = 3;
  isLoading = false;

  // Form controls
  onboardingForm: FormGroup;
  skillInput = new FormControl('');
  skills: string[] = [];
  profileImageUrl: string | null = null;
  selectedExperience: string | null = null;
  selectedJobTypes: string[] = [];

  // Retrieved from auth service/state management in real app
  selectedRole: UserRole = 'Job Seeker';

  steps: OnboardingStep[] = [
    {
      id: 1,
      title: 'Complete Your Profile',
      description: 'Help us get to know you better',
    },
    {
      id: 2,
      title: 'Skills & Experience',
      description:
        this.selectedRole === 'Job Seeker'
          ? 'Tell us about your skills and experience level'
          : 'What skills are you looking for?',
    },
    {
      id: 3,
      title: 'Preferences',
      description:
        this.selectedRole === 'Job Seeker'
          ? 'Set your job preferences to help us find the best matches'
          : 'Tell us more about your company',
    },
  ];

  experienceLevels = [
    'Entry Level (0-2 years)',
    'Mid Level (3-5 years)',
    'Senior Level (5-8 years)',
    'Expert Level (8+ years)',
  ];

  jobTypes = ['Full-time', 'Part-time', 'Contract', 'Freelance', 'Remote'];

  constructor(private fb: FormBuilder, private router: Router) {
    this.onboardingForm = this.fb.group({
      // Step 1: Profile
      phone: ['', [Validators.required]],
      location: ['', [Validators.required]],
      bio: ['', [Validators.required, Validators.minLength(50)]],

      // Step 2: Skills & Experience
      // skills and experience handled separately

      // Step 3: Preferences (Job Seeker)
      salaryExpectation: [''],
      preferredLocation: [''],

      // Step 3: Preferences (Employer)
      industry: [''],
      companySize: [''],
    });

    // Set conditional validators based on role
    if (this.selectedRole === 'Job Seeker') {
      this.onboardingForm
        .get('salaryExpectation')
        ?.setValidators([Validators.required]);
      this.onboardingForm
        .get('preferredLocation')
        ?.setValidators([Validators.required]);
    } else {
      this.onboardingForm.get('industry')?.setValidators([Validators.required]);
      this.onboardingForm
        .get('companySize')
        ?.setValidators([Validators.required]);
    }
  }

  get currentStepData(): OnboardingStep {
    return (
      this.steps.find((step) => step.id === this.currentStep) || this.steps[0]
    );
  }

  getErrorMessage(field: string): string | undefined {
    const control = this.onboardingForm.get(field);
    if (!control?.errors || !control.touched) return undefined;

    if (control.errors['required']) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    }
    if (control.errors['minlength']) {
      return `${
        field.charAt(0).toUpperCase() + field.slice(1)
      } must be at least ${
        control.errors['minlength'].requiredLength
      } characters`;
    }

    return undefined;
  }

  validateCurrentStep(): boolean {
    const currentControls = this.getCurrentStepControls();
    let isValid = true;

    currentControls.forEach((controlName) => {
      const control = this.onboardingForm.get(controlName);
      if (control?.invalid) {
        control.markAsTouched();
        isValid = false;
      }
    });

    // Additional validation for step 2
    if (this.currentStep === 2) {
      if (this.skills.length === 0) {
        isValid = false;
        // Show error message for skills
      }
      if (this.selectedRole === 'Job Seeker' && !this.selectedExperience) {
        isValid = false;
        // Show error message for experience
      }
    }

    return isValid;
  }

  getCurrentStepControls(): string[] {
    switch (this.currentStep) {
      case 1:
        return ['phone', 'location', 'bio'];
      case 2:
        return []; // Skills and experience handled separately
      case 3:
        return this.selectedRole === 'Job Seeker'
          ? ['salaryExpectation', 'preferredLocation']
          : ['industry', 'companySize'];
      default:
        return [];
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  async nextStep() {
    if (!this.validateCurrentStep()) {
      return;
    }

    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
      return;
    }

    this.isLoading = true;
    try {
      // TODO: Submit onboarding data
      const onboardingData = {
        ...this.onboardingForm.value,
        skills: this.skills,
        experienceLevel: this.selectedExperience,
        jobTypes: this.selectedJobTypes,
        role: this.selectedRole,
      };
      console.log('Onboarding completed:', onboardingData);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call

      // Redirect to dashboard
      this.router.navigate(['/dashboard']);
    } finally {
      this.isLoading = false;
    }
  }

  uploadImage() {
    // TODO: Implement image upload
    console.log('Upload image');
  }

  addSkill() {
    const skill = this.skillInput.value?.trim();
    if (skill && !this.skills.includes(skill)) {
      this.skills.push(skill);
      this.skillInput.setValue('');
    }
  }

  removeSkill(skill: string) {
    this.skills = this.skills.filter((s) => s !== skill);
  }

  selectExperience(level: string) {
    this.selectedExperience = level;
  }

  toggleJobType(type: string) {
    const index = this.selectedJobTypes.indexOf(type);
    if (index === -1) {
      this.selectedJobTypes.push(type);
    } else {
      this.selectedJobTypes.splice(index, 1);
    }
  }
}
