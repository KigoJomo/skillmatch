import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from '../dashboard-layout/dashboard-layout.component';

@Component({
  selector: 'app-job-matches',
  standalone: true,
  imports: [CommonModule, DashboardLayoutComponent],
  template: `
    <app-dashboard-layout>
      <div class="max-w-7xl mx-auto p-6">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-semibold">Job Matches</h2>
          <div class="flex gap-4">
            <select
              class="px-3 py-2 rounded-lg bg-background-light/50 border border-foreground-light/20"
            >
              <option>All Jobs</option>
              <option>Best Matches</option>
              <option>Recently Posted</option>
              <option>Applied</option>
            </select>
            <button
              class="px-4 py-2 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent)]/90"
            >
              Refresh Matches
            </button>
          </div>
        </div>

        <!-- Job Listings Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Job Card 1 -->
          <div
            class="p-6 rounded-xl bg-background-light/30 border border-foreground-light/20 hover:border-[var(--color-accent)] transition-colors"
          >
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="font-medium text-lg">Senior Frontend Developer</h3>
                <p class="text-sm text-foreground-light">TechCorp Inc.</p>
              </div>
              <span
                class="px-2 py-1 rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] text-sm"
              >
                95% Match
              </span>
            </div>

            <div class="space-y-4">
              <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 rounded-full bg-background-light text-xs"
                  >React</span
                >
                <span class="px-2 py-1 rounded-full bg-background-light text-xs"
                  >TypeScript</span
                >
                <span class="px-2 py-1 rounded-full bg-background-light text-xs"
                  >Node.js</span
                >
              </div>

              <div
                class="flex items-center gap-2 text-sm text-foreground-light"
              >
                <span>Remote</span>
                <span>•</span>
                <span>Full-time</span>
                <span>•</span>
                <span>$120k - $150k</span>
              </div>

              <p class="text-sm">
                Looking for an experienced frontend developer to join our
                growing team...
              </p>

              <div class="flex justify-between items-center">
                <span class="text-xs text-foreground-light"
                  >Posted 2 days ago</span
                >
                <button
                  class="px-4 py-2 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent)]/90"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>

          <!-- Job Card 2 -->
          <div
            class="p-6 rounded-xl bg-background-light/30 border border-foreground-light/20 hover:border-[var(--color-accent)] transition-colors"
          >
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="font-medium text-lg">Lead Frontend Engineer</h3>
                <p class="text-sm text-foreground-light">InnovateHub</p>
              </div>
              <span
                class="px-2 py-1 rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] text-sm"
              >
                88% Match
              </span>
            </div>

            <div class="space-y-4">
              <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 rounded-full bg-background-light text-xs"
                  >Angular</span
                >
                <span class="px-2 py-1 rounded-full bg-background-light text-xs"
                  >TypeScript</span
                >
                <span class="px-2 py-1 rounded-full bg-background-light text-xs"
                  >Team Lead</span
                >
              </div>

              <div
                class="flex items-center gap-2 text-sm text-foreground-light"
              >
                <span>Hybrid</span>
                <span>•</span>
                <span>Full-time</span>
                <span>•</span>
                <span>$130k - $160k</span>
              </div>

              <p class="text-sm">
                Join our engineering team as a lead frontend developer...
              </p>

              <div class="flex justify-between items-center">
                <span class="text-xs text-foreground-light"
                  >Posted 5 days ago</span
                >
                <button
                  class="px-4 py-2 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent)]/90"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Match Analysis -->
        <div
          class="mt-8 p-6 rounded-xl bg-background-light/30 border border-foreground-light/20"
        >
          <h3 class="text-lg font-medium mb-4">Your Match Analytics</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="p-4 rounded-lg bg-background-light/50">
              <h4 class="font-medium mb-2">Skills Match Rate</h4>
              <div class="flex items-end gap-2">
                <span class="text-3xl font-bold text-[var(--color-accent)]"
                  >92%</span
                >
                <span class="text-sm text-foreground-light mb-1"
                  >avg. match</span
                >
              </div>
            </div>
            <div class="p-4 rounded-lg bg-background-light/50">
              <h4 class="font-medium mb-2">Total Matches</h4>
              <div class="flex items-end gap-2">
                <span class="text-3xl font-bold">24</span>
                <span class="text-sm text-foreground-light mb-1">jobs</span>
              </div>
            </div>
            <div class="p-4 rounded-lg bg-background-light/50">
              <h4 class="font-medium mb-2">Application Rate</h4>
              <div class="flex items-end gap-2">
                <span class="text-3xl font-bold text-green-500">75%</span>
                <span class="text-sm text-foreground-light mb-1">success</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </app-dashboard-layout>
  `,
})
export class JobMatchesComponent {}
