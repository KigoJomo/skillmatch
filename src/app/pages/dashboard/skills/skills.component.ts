import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from '../dashboard-layout/dashboard-layout.component';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ButtonComponent } from '../../../shared/ui/button/button.component';
import { InputComponent } from '../../../shared/ui/input/input.component';

interface Skill {
  name: string;
  level: string;
  progress: number;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule,
    DashboardLayoutComponent,
    ReactiveFormsModule,
    ButtonComponent,
    InputComponent,
  ],
  template: `
    <app-dashboard-layout>
      <div class="max-w-5xl mx-auto p-6">
        <h2 class="text-2xl font-semibold mb-6">Skills & Certifications</h2>
        <div class="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
          <div class="space-y-6">
            <!-- Technical Skills -->
            <div
              class="p-6 rounded-xl bg-background-light/30 border border-foreground-light/20"
            >
              <h3 class="text-lg font-medium mb-4">Technical Skills</h3>
              <div class="space-y-4">
                <div
                  *ngFor="let skill of technicalSkills; trackBy: trackByName"
                  class="flex items-center justify-between"
                >
                  <div class="flex-1 mr-4">
                    <div class="flex justify-between mb-1">
                      <span class="text-sm font-medium">{{ skill.name }}</span>
                      <span class="text-sm text-foreground-light">{{
                        skill.level
                      }}</span>
                    </div>
                    <div
                      class="h-2 bg-background-light rounded-full overflow-hidden"
                    >
                      <div
                        class="h-full bg-[var(--color-accent)]"
                        [style.width]="skill.progress + '%'"
                      ></div>
                    </div>
                  </div>
                  <button
                    class="text-[var(--color-accent)] hover:text-[var(--color-accent)]/80"
                    (click)="editSkill(skill)"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>

            <!-- Certifications -->
            <div
              class="p-6 rounded-xl bg-background-light/30 border border-foreground-light/20"
            >
              <h3 class="text-lg font-medium mb-4">
                Certifications & Achievements
              </h3>
              <div class="space-y-4">
                <div
                  *ngFor="let cert of certifications; trackBy: trackByName"
                  class="flex items-center justify-between p-4 bg-background-light/50 rounded-lg"
                >
                  <div>
                    <h4 class="font-medium">{{ cert.name }}</h4>
                    <p class="text-sm text-foreground-light">{{ cert.date }}</p>
                  </div>
                  <button
                    class="text-[var(--color-accent)] hover:text-[var(--color-accent)]/80"
                    (click)="viewCertification(cert)"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Learning Progress -->
          <div class="space-y-6">
            <div
              class="p-6 rounded-xl bg-background-light/30 border border-foreground-light/20"
            >
              <h3 class="text-lg font-medium mb-4">Courses in Progress</h3>
              <div class="space-y-4">
                <div
                  *ngFor="let course of coursesInProgress; trackBy: trackByName"
                >
                  <div class="flex justify-between text-sm mb-1">
                    <span>{{ course.name }}</span>
                    <span>{{ course.progress }}% Complete</span>
                  </div>
                  <div
                    class="h-2 bg-background-light rounded-full overflow-hidden"
                  >
                    <div
                      class="h-full bg-[var(--color-accent)]"
                      [style.width]="course.progress + '%'"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </app-dashboard-layout>

    <!-- Edit Skill Modal -->
    <div
      *ngIf="editingSkill"
      class="fixed inset-0 bg-black/50 flex items-center justify-center"
    >
      <div
        class="bg-[var(--color-background)] p-6 rounded-xl max-w-md w-full mx-4"
      >
        <h3 class="text-xl font-medium mb-4">Edit Skill</h3>
        <form
          [formGroup]="skillForm"
          (ngSubmit)="saveSkill()"
          class="space-y-4"
        >
          <app-input
            label="Skill Name"
            formControlName="name"
            [error]="getSkillErrorMessage('name')"
          ></app-input>

          <div>
            <label class="block text-sm font-medium mb-2"
              >Proficiency Level</label
            >
            <select
              formControlName="level"
              class="w-full px-4 py-2 rounded-lg border bg-background-light border-foreground-light/20"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Progress</label>
            <input
              type="range"
              formControlName="progress"
              class="w-full"
              min="0"
              max="100"
              step="5"
            />
            <div class="text-sm text-right text-foreground-light">
              {{ skillForm.get('progress')?.value }}%
            </div>
          </div>

          <div class="flex justify-end gap-4 mt-6">
            <app-button type="button" variant="outline" (click)="cancelEdit()">
              Cancel
            </app-button>
            <app-button
              type="submit"
              variant="primary"
              [disabled]="!skillForm.valid"
            >
              Save Changes
            </app-button>
          </div>
        </form>
      </div>
    </div>
  `,
})
export class SkillsComponent {
  technicalSkills: Skill[] = [
    { name: 'React', level: 'Advanced', progress: 90 },
    { name: 'TypeScript', level: 'Advanced', progress: 85 },
    { name: 'Node.js', level: 'Intermediate', progress: 65 },
    { name: 'Communication', level: 'Advanced', progress: 80 },
  ];

  certifications = [
    {
      name: 'AWS Certified Developer',
      date: 'Issued: Jan 2024 • Expires: Jan 2027',
    },
    {
      name: 'React Advanced Concepts',
      date: 'Completed: March 2024',
    },
  ];

  coursesInProgress = [
    { name: 'System Design', progress: 60 },
    { name: 'AWS Services', progress: 40 },
  ];

  editingSkill: Skill | null = null;
  skillForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.skillForm = this.fb.group({
      name: ['', [Validators.required]],
      level: ['', [Validators.required]],
      progress: [
        0,
        [Validators.required, Validators.min(0), Validators.max(100)],
      ],
    });
  }

  editSkill(skill: Skill) {
    this.editingSkill = skill;
    this.skillForm.patchValue({
      name: skill.name,
      level: skill.level,
      progress: skill.progress,
    });
  }

  saveSkill() {
    if (!this.skillForm.valid || !this.editingSkill) return;

    const updatedSkill = this.skillForm.value;
    const index = this.technicalSkills.findIndex(
      (s) => s.name === this.editingSkill?.name
    );

    if (index !== -1) {
      this.technicalSkills[index] = updatedSkill;
    }

    this.cancelEdit();
  }

  cancelEdit() {
    this.editingSkill = null;
    this.skillForm.reset();
  }

  viewCertification(cert: { name: string; date: string }) {
    // TODO: Implement certification viewing functionality
    alert(`Viewing certification: ${cert.name}`);
  }

  getSkillErrorMessage(field: string): string | undefined {
    const control = this.skillForm.get(field);
    if (!control?.errors || !control.touched) return undefined;

    if (control.errors['required']) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    }

    return undefined;
  }

  trackByName(index: number, item: { name: string }) {
    return item.name;
  }
}
