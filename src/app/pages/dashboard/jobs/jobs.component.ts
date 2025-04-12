import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/ui/button/button.component';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">Available Jobs</h1>
        <div class="flex gap-4">
          <input
            type="text"
            placeholder="Search jobs..."
            class="px-4 py-2 rounded-lg border border-foreground-light/20 bg-background-light"
          />
          <button
            class="px-4 py-2 rounded-lg bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent)]/90"
          >
            Search
          </button>
        </div>
      </div>

      <div class="space-y-4">
        <div
          *ngFor="let job of jobs; trackBy: trackByJobId"
          class="p-6 rounded-xl bg-background-light/30 border border-foreground-light/20"
        >
          <div class="flex justify-between items-start mb-4">
            <div>
              <h2 class="text-xl font-semibold mb-1">{{ job.title }}</h2>
              <div class="flex items-center gap-4 text-foreground-light">
                <span>{{ job.company }}</span>
                <span>•</span>
                <span>{{ job.location }}</span>
                <span>•</span>
                <span>{{ job.type }}</span>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-[var(--color-accent)]"
                >{{ job.matchPercentage }}% Match</span
              >
              <app-button size="sm">Apply Now</app-button>
            </div>
          </div>
          <p class="text-foreground-light mb-4">{{ job.description }}</p>
          <div class="flex flex-wrap gap-2">
            <span
              *ngFor="let skill of job.requiredSkills"
              class="px-2 py-1 text-xs rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class JobsComponent {
  jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp',
      location: 'Remote',
      type: 'Full-time',
      matchPercentage: 95,
      description:
        'We are seeking an experienced frontend developer to join our dynamic team...',
      requiredSkills: ['Angular', 'TypeScript', 'TailwindCSS', 'RxJS'],
    },
    {
      id: 2,
      title: 'Full Stack Engineer',
      company: 'InnovateSoft',
      location: 'New York, NY',
      type: 'Full-time',
      matchPercentage: 88,
      description:
        'Looking for a full stack developer with strong experience in modern web technologies...',
      requiredSkills: ['Node.js', 'Angular', 'PostgreSQL', 'Docker'],
    },
    {
      id: 3,
      title: 'UI/UX Developer',
      company: 'DesignHub',
      location: 'Remote',
      type: 'Contract',
      matchPercentage: 85,
      description:
        'Join our creative team to build beautiful and intuitive user interfaces...',
      requiredSkills: ['Angular', 'SCSS', 'Figma', 'User Testing'],
    },
  ];

  trackByJobId(index: number, job: any): number {
    return job.id;
  }
}
