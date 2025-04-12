import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-applications',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">My Applications</h1>
        <div class="flex items-center gap-4">
          <select
            class="px-4 py-2 rounded-lg border border-foreground-light/20 bg-background-light"
          >
            <option value="all">All Applications</option>
            <option value="pending">Pending</option>
            <option value="in-review">In Review</option>
            <option value="interviewed">Interviewed</option>
            <option value="offered">Offered</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      <div class="space-y-4">
        @for (application of applications; track application.id) {
        <div
          class="p-6 rounded-xl bg-background-light/30 border border-foreground-light/20"
        >
          <div class="flex justify-between items-start mb-4">
            <div>
              <h2 class="text-xl font-semibold mb-1">
                {{ application.jobTitle }}
              </h2>
              <div class="flex items-center gap-4 text-foreground-light">
                <span>{{ application.company }}</span>
                <span>•</span>
                <span>{{ application.location }}</span>
                <span>•</span>
                <span>Applied {{ application.appliedDate }}</span>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <span
                [class]="
                  'px-3 py-1 rounded-full text-sm ' + application.statusClass
                "
              >
                {{ application.status }}
              </span>
              <button
                class="text-[var(--color-accent)] hover:underline"
                *ngIf="application.hasMessage"
              >
                View Message
              </button>
            </div>
          </div>

          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <span class="text-foreground-light">Next Steps:</span>
              <span>{{ application.nextSteps }}</span>
            </div>

            @if (application.interviewDate) {
            <div class="flex items-center gap-2">
              <span class="text-foreground-light">Interview:</span>
              <span>{{ application.interviewDate }}</span>
            </div>
            }
          </div>
        </div>
        }
      </div>
    </div>
  `,
})
export class ApplicationsComponent {
  applications = [
    {
      id: 1,
      jobTitle: 'Senior Frontend Developer',
      company: 'TechCorp',
      location: 'Remote',
      appliedDate: '2 days ago',
      status: 'In Review',
      statusClass: 'bg-blue-500/20 text-blue-500',
      nextSteps: 'Technical interview scheduled',
      interviewDate: 'April 15, 2025 at 2:00 PM',
      hasMessage: true,
    },
    {
      id: 2,
      jobTitle: 'Full Stack Engineer',
      company: 'InnovateSoft',
      location: 'New York, NY',
      appliedDate: '5 days ago',
      status: 'Pending',
      statusClass: 'bg-yellow-500/20 text-yellow-500',
      nextSteps: 'Application under initial review',
      hasMessage: false,
    },
    {
      id: 3,
      jobTitle: 'UI/UX Developer',
      company: 'DesignHub',
      location: 'Remote',
      appliedDate: '1 week ago',
      status: 'Interviewed',
      statusClass: 'bg-purple-500/20 text-purple-500',
      nextSteps: 'Waiting for final decision',
      interviewDate: 'April 8, 2025 at 11:00 AM',
      hasMessage: true,
    },
  ];
}
