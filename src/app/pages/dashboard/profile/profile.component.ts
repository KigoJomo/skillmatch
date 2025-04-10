import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DashboardLayoutComponent } from '../dashboard-layout/dashboard-layout.component';
import { ButtonComponent } from '../../../shared/ui/button/button.component';
import { InputComponent } from '../../../shared/ui/input/input.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DashboardLayoutComponent,
    ButtonComponent,
    InputComponent,
  ],
  template: `
    <app-dashboard-layout>
      <div class="max-w-5xl mx-auto space-y-6">
        <!-- Profile Overview -->
        <div
          class="p-6 rounded-xl bg-background-light/30 border border-foreground-light/20"
        >
          <div class="flex items-start justify-between mb-6">
            <div class="flex gap-4">
              <div class="relative">
                <img
                  [src]="profileImageUrl || '/images/profile-placeholder.jpeg'"
                  alt="Profile"
                  class="w-24 h-24 rounded-full object-cover"
                />
                <button
                  type="button"
                  (click)="uploadImage()"
                  class="absolute bottom-0 right-0 p-2 rounded-full bg-[var(--color-accent)] text-background"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                </button>
              </div>
              <div>
                <h1 class="text-2xl font-medium">John Doe</h1>
                <p class="text-foreground-light">Senior Frontend Developer</p>
              </div>
            </div>
            <app-button variant="outline" (click)="toggleEdit()">{{
              isEditing ? 'Cancel' : 'Edit Profile'
            }}</app-button>
          </div>

          <form
            [formGroup]="profileForm"
            (ngSubmit)="onSubmit()"
            class="space-y-6"
          >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <app-input
                label="First Name"
                formControlName="firstName"
                [error]="getErrorMessage('firstName')"
                [readonly]="!isEditing"
              ></app-input>
              <app-input
                label="Last Name"
                formControlName="lastName"
                [error]="getErrorMessage('lastName')"
                [readonly]="!isEditing"
              ></app-input>
              <app-input
                label="Email"
                type="email"
                formControlName="email"
                [error]="getErrorMessage('email')"
                [readonly]="!isEditing"
              ></app-input>
              <app-input
                label="Phone"
                type="tel"
                formControlName="phone"
                [error]="getErrorMessage('phone')"
                [readonly]="!isEditing"
              ></app-input>
              <app-input
                label="Location"
                formControlName="location"
                [error]="getErrorMessage('location')"
                [readonly]="!isEditing"
              ></app-input>
              <app-input
                label="Experience Level"
                formControlName="experience"
                [error]="getErrorMessage('experience')"
                [readonly]="!isEditing"
              ></app-input>
            </div>

            <div>
              <app-input
                label="Bio"
                type="textarea"
                formControlName="bio"
                [error]="getErrorMessage('bio')"
                [readonly]="!isEditing"
              ></app-input>
            </div>

            @if (isEditing) {
            <div class="flex justify-end gap-4">
              <app-button type="button" variant="outline" (click)="toggleEdit()"
                >Cancel</app-button
              >
              <app-button type="submit" variant="primary" [loading]="isSaving"
                >Save Changes</app-button
              >
            </div>
            }
          </form>
        </div>

        <!-- Skills Section -->
        <div
          class="p-6 rounded-xl bg-background-light/30 border border-foreground-light/20"
        >
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-medium">Skills & Expertise</h2>
            <app-button variant="outline" (click)="toggleSkillEdit()">
              {{ isEditingSkills ? 'Done' : 'Manage Skills' }}
            </app-button>
          </div>

          @if (isEditingSkills) {
          <div class="mb-6">
            <div class="flex gap-2 mb-4">
              <app-input
                [formControl]="skillInput"
                placeholder="Add a skill (e.g. JavaScript)"
                (keyup.enter)="addSkill()"
              ></app-input>
              <app-button type="button" variant="outline" (click)="addSkill()"
                >Add</app-button
              >
            </div>
          </div>
          }

          <div class="flex flex-wrap gap-2">
            @for (skill of skills; track skill.name) {
            <div
              class="group flex items-center gap-2 px-3 py-1 rounded-full bg-background-light/30 border border-foreground-light/30"
            >
              <span>{{ skill.name }}</span>
              <div class="flex items-center gap-1">
                <span class="text-xs text-foreground-light">{{
                  skill.level
                }}</span>
                @if (isEditingSkills) {
                <button
                  type="button"
                  (click)="removeSkill(skill)"
                  class="text-foreground-light hover:text-foreground"
                >
                  ×
                </button>
                }
              </div>
            </div>
            }
          </div>
        </div>

        <!-- Portfolio Projects -->
        <div
          class="p-6 rounded-xl bg-background-light/30 border border-foreground-light/20"
        >
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-medium">Portfolio Projects</h2>
            <app-button variant="outline" (click)="toggleProjectEdit()">
              {{ isEditingProjects ? 'Done' : 'Add Project' }}
            </app-button>
          </div>

          @if (isEditingProjects) {
          <form
            [formGroup]="projectForm"
            (ngSubmit)="addProject()"
            class="mb-6 p-4 bg-background-light/50 rounded-lg border border-foreground-light/20"
          >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <app-input
                label="Project Name"
                formControlName="name"
                [error]="getProjectErrorMessage('name')"
              ></app-input>
              <app-input
                label="Project URL"
                formControlName="url"
                [error]="getProjectErrorMessage('url')"
              ></app-input>
            </div>
            <app-input
              label="Description"
              type="textarea"
              formControlName="description"
              [error]="getProjectErrorMessage('description')"
            ></app-input>
            <div class="flex justify-end mt-4">
              <app-button type="submit" variant="primary"
                >Add Project</app-button
              >
            </div>
          </form>
          }

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            @for (project of projects; track project.name) {
            <div
              class="p-4 rounded-lg bg-background-light/50 border border-foreground-light/20"
            >
              <div class="flex justify-between items-start mb-2">
                <h3 class="font-medium">{{ project.name }}</h3>
                @if (isEditingProjects) {
                <button
                  type="button"
                  (click)="removeProject(project)"
                  class="text-foreground-light hover:text-foreground"
                >
                  ×
                </button>
                }
              </div>
              <p class="text-sm text-foreground-light mb-3">
                {{ project.description }}
              </p>
              @if (project.url) {
              <a
                [href]="project.url"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-[var(--color-accent)] hover:underline"
                >View Project</a
              >
              }
            </div>
            }
          </div>
        </div>
      </div>
    </app-dashboard-layout>
  `,
})
export class ProfileComponent {
  profileImageUrl: string | null = null;
  isEditing = false;
  isEditingSkills = false;
  isEditingProjects = false;
  isSaving = false;

  skillInput = new FormControl('');
  skills: { name: string; level: string }[] = [
    { name: 'React', level: 'Advanced' },
    { name: 'TypeScript', level: 'Intermediate' },
    { name: 'Node.js', level: 'Intermediate' },
  ];

  projects: { name: string; description: string; url?: string }[] = [
    {
      name: 'E-commerce Platform',
      description:
        'A full-stack e-commerce platform built with React and Node.js',
      url: 'https://example.com/project',
    },
    {
      name: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates',
      url: 'https://example.com/project2',
    },
  ];

  profileForm: FormGroup;
  projectForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: ['John', [Validators.required]],
      lastName: ['Doe', [Validators.required]],
      email: ['john.doe@example.com', [Validators.required, Validators.email]],
      phone: ['+1234567890', [Validators.required]],
      location: ['San Francisco, CA', [Validators.required]],
      experience: ['Senior Level (5-8 years)', [Validators.required]],
      bio: [
        'Experienced frontend developer passionate about creating intuitive user interfaces.',
        [Validators.required],
      ],
    });

    this.projectForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      url: [''],
    });
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
    if (!this.isEditing) {
      this.profileForm.reset({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '+1234567890',
        location: 'San Francisco, CA',
        experience: 'Senior Level (5-8 years)',
        bio: 'Experienced frontend developer passionate about creating intuitive user interfaces.',
      });
    }
  }

  toggleSkillEdit() {
    this.isEditingSkills = !this.isEditingSkills;
    this.skillInput.reset();
  }

  toggleProjectEdit() {
    this.isEditingProjects = !this.isEditingProjects;
    this.projectForm.reset();
  }

  uploadImage() {
    // TODO: Implement image upload
    console.log('Upload profile image');
  }

  addSkill() {
    const skill = this.skillInput.value?.trim();
    if (skill && !this.skills.find((s) => s.name === skill)) {
      this.skills.push({ name: skill, level: 'Beginner' });
      this.skillInput.reset();
    }
  }

  removeSkill(skill: { name: string; level: string }) {
    this.skills = this.skills.filter((s) => s.name !== skill.name);
  }

  addProject() {
    if (this.projectForm.valid) {
      this.projects.push(this.projectForm.value);
      this.projectForm.reset();
    }
  }

  removeProject(project: { name: string; description: string; url?: string }) {
    this.projects = this.projects.filter((p) => p.name !== project.name);
  }

  async onSubmit() {
    if (this.profileForm.valid) {
      this.isSaving = true;
      try {
        // TODO: Implement profile update
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
        this.toggleEdit();
      } finally {
        this.isSaving = false;
      }
    }
  }

  getErrorMessage(field: string): string | undefined {
    const control = this.profileForm.get(field);
    if (!control?.errors || !control.touched) return undefined;

    if (control.errors['required']) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    }
    if (control.errors['email']) {
      return 'Please enter a valid email address';
    }

    return undefined;
  }

  getProjectErrorMessage(field: string): string | undefined {
    const control = this.projectForm.get(field);
    if (!control?.errors || !control.touched) return undefined;

    if (control.errors['required']) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    }

    return undefined;
  }
}
