import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from '../dashboard-layout/dashboard-layout.component';
import { ButtonComponent } from '../../../shared/ui/button/button.component';
import { RouterLink } from '@angular/router';

interface Candidate {
  id: string;
  name: string;
  role: string;
  experience: string;
  skills: string[];
  matchScore: number;
  status: 'new' | 'screening' | 'interviewing' | 'offered' | 'rejected';
  appliedDate: string;
}

@Component({
  selector: 'app-candidates',
  standalone: true,
  imports: [CommonModule, DashboardLayoutComponent],
  template: `
    <app-dashboard-layout>
      <div class="p-6">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-semibold">Candidate Management</h2>
          <div class="flex gap-4">
            <select
              class="px-3 py-2 rounded-lg bg-background-light/50 border border-foreground-light/20"
            >
              <option>All Candidates</option>
              <option>New Applications</option>
              <option>Screening</option>
              <option>Interviewing</option>
              <option>Offered</option>
              <option>Rejected</option>
            </select>
            <button
              class="px-4 py-2 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent)]/90"
            >
              Schedule Interviews
            </button>
          </div>
        </div>

        <!-- Candidate List -->
        <div class="space-y-4">
          @for (candidate of candidates; track candidate.id) {
          <div
            class="p-6 rounded-xl bg-background-light/30 border border-foreground-light/20 hover:border-[var(--color-accent)] transition-colors"
          >
            <div class="flex items-start justify-between mb-4">
              <div class="flex gap-4">
                <img
                  [src]="'/images/profile-placeholder.jpeg'"
                  alt="Profile"
                  class="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 class="font-medium">{{ candidate.name }}</h3>
                  <p class="text-sm text-foreground-light">{{ candidate.role }}</p>
                  <p class="text-sm text-foreground-light">
                    {{ candidate.experience }}
                  </p>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <span
                  class="px-2 py-1 rounded-full"
                  [class]="getStatusClasses(candidate.status)"
                >
                  {{ candidate.status }}
                </span>
                <span
                  class="px-2 py-1 rounded bg-[var(--color-accent)]/20 text-[var(--color-accent)]"
                >
                  {{ candidate.matchScore }}% Match
                </span>
              </div>
            </div>

            <div class="flex flex-wrap gap-2 mb-4">
              @for (skill of candidate.skills; track skill) {
              <span
                class="px-2 py-1 rounded-full bg-background-light text-xs"
              >
                {{ skill }}
              </span>
              }
            </div>

            <div
              class="flex items-center justify-between pt-4 border-t border-foreground-light/20"
            >
              <span class="text-sm text-foreground-light">
                Applied {{ candidate.appliedDate }}
              </span>
              <div class="flex gap-2">
                <button
                  class="px-3 py-1 text-sm rounded-lg border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10"
                >
                  View Profile
                </button>
                <button
                  class="px-3 py-1 text-sm rounded-lg bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent)]/90"
                >
                  Schedule Interview
                </button>
              </div>
            </div>
          </div>
          }
        </div>

        <!-- Pagination -->
        <div class="flex justify-center mt-6">
          <div class="flex gap-2">
            <button
              class="w-8 h-8 flex items-center justify-center rounded-lg border border-foreground-light/20 hover:border-[var(--color-accent)]"
            >
              <span class="sr-only">Previous</span>
              ←
            </button>
            <button
              class="w-8 h-8 flex items-center justify-center rounded-lg bg-[var(--color-accent)] text-white"
            >
              1
            </button>
            <button
              class="w-8 h-8 flex items-center justify-center rounded-lg border border-foreground-light/20 hover:border-[var(--color-accent)]"
            >
              2
            </button>
            <button
              class="w-8 h-8 flex items-center justify-center rounded-lg border border-foreground-light/20 hover:border-[var(--color-accent)]"
            >
              3
            </button>
            <button
              class="w-8 h-8 flex items-center justify-center rounded-lg border border-foreground-light/20 hover:border-[var(--color-accent)]"
            >
              <span class="sr-only">Next</span>
              →
            </button>
          </div>
        </div>
      </div>
    </app-dashboard-layout>
  `,
})
export class CandidatesComponent {
  candidates: Candidate[] = [
    {
      id: '1',
      name: 'John Doe',
      role: 'Senior Frontend Developer',
      experience: '5 years experience',
      skills: ['React', 'TypeScript', 'Node.js'],
      matchScore: 95,
      status: 'new',
      appliedDate: '2 days ago',
    },
    {
      id: '2',
      name: 'Jane Smith',
      role: 'Frontend Developer',
      experience: '3 years experience',
      skills: ['Angular', 'JavaScript', 'CSS'],
      matchScore: 88,
      status: 'screening',
      appliedDate: '3 days ago',
    },
    {
      id: '3',
      name: 'Mike Johnson',
      role: 'Lead Frontend Developer',
      experience: '7 years experience',
      skills: ['React', 'Vue', 'TypeScript', 'Node.js'],
      matchScore: 92,
      status: 'interviewing',
      appliedDate: '1 week ago',
    },
  ];

  getStatusClasses(status: string): string {
    const baseClasses = 'text-xs capitalize';
    switch (status) {
      case 'new':
        return `${baseClasses} bg-blue-500/20 text-blue-500`;
      case 'screening':
        return `${baseClasses} bg-yellow-500/20 text-yellow-500`;
      case 'interviewing':
        return `${baseClasses} bg-[var(--color-accent)]/20 text-[var(--color-accent)]`;
      case 'offered':
        return `${baseClasses} bg-green-500/20 text-green-500`;
      case 'rejected':
        return `${baseClasses} bg-red-500/20 text-red-500`;
      default:
        return baseClasses;
    }
  }
}