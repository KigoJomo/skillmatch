import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/ui/button/button.component';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <div class="container mx-auto px-4 py-12">
      <div class="text-center mb-12">
        <h1 class="text-3xl font-bold mb-4">Join Our Team</h1>
        <p class="text-foreground-light max-w-2xl mx-auto">
          Help us transform the future of recruitment. We're looking for
          passionate individuals who want to make a difference in how people
          find their dream jobs.
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold mb-6">Open Positions</h2>
        <div class="space-y-6">
          <ng-container
            *ngFor="let position of openPositions; trackBy: trackById"
          >
            <div
              class="p-6 rounded-xl bg-background-light/30 border border-foreground-light/20"
            >
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h3 class="text-xl font-semibold mb-1">
                    {{ position.title }}
                  </h3>
                  <div class="flex items-center gap-4 text-foreground-light">
                    <span>{{ position.department }}</span>
                    <span>•</span>
                    <span>{{ position.location }}</span>
                  </div>
                </div>
                <app-button size="sm">Apply Now</app-button>
              </div>
              <p class="text-foreground-light mb-4">
                {{ position.description }}
              </p>
              <div class="flex gap-2">
                <ng-container *ngFor="let tag of position.tags">
                  <span
                    class="px-2 py-1 text-xs rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                  >
                    {{ tag }}
                  </span>
                </ng-container>
              </div>
            </div>
          </ng-container>
        </div>
      </div>

      <div class="mt-16 text-center">
        <h2 class="text-2xl font-bold mb-4">Don't see a perfect match?</h2>
        <p class="text-foreground-light mb-6">
          We're always looking for talented individuals. Send us your resume and
          we'll keep you in mind for future opportunities.
        </p>
        <app-button>Submit Your Resume</app-button>
      </div>
    </div>
  `,
})
export class CareersComponent {
  openPositions = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      description:
        'Join our frontend team to build innovative features for our AI-powered recruitment platform.',
      tags: ['Angular', 'TypeScript', 'TailwindCSS'],
    },
    {
      id: 2,
      title: 'AI/ML Engineer',
      department: 'Data Science',
      location: 'Hybrid',
      description:
        'Help improve our AI matching algorithms and develop new machine learning models.',
      tags: ['Python', 'TensorFlow', 'NLP'],
    },
    {
      id: 3,
      title: 'Product Manager',
      department: 'Product',
      location: 'On-site',
      description:
        'Lead the development of new features and drive product strategy.',
      tags: ['Product Strategy', 'Agile', 'User Research'],
    },
  ];

  trackById(index: number, item: any): number {
    return item.id;
  }
}
