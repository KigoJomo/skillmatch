import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from '../dashboard-layout/dashboard-layout.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employer-dashboard',
  standalone: true,
  imports: [CommonModule, DashboardLayoutComponent, RouterLink],
  template: `
    <app-dashboard-layout>
      <div class="p-6">
        <!-- Quick Actions -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <a
            routerLink="/dashboard/employer/jobs"
            class="p-4 rounded-lg bg-background-light/50 border border-foreground-light/20 text-left hover:border-[var(--color-accent)] transition-colors"
          >
            <h5 class="font-medium mb-1">Post New Job</h5>
            <p class="text-xs text-foreground-light">
              Create a new job listing
            </p>
          </a>
          <a
            routerLink="/dashboard/employer/candidates"
            class="p-4 rounded-lg bg-background-light/50 border border-foreground-light/20 text-left hover:border-[var(--color-accent)] transition-colors"
          >
            <h5 class="font-medium mb-1">View Candidates</h5>
            <p class="text-xs text-foreground-light">Review applications</p>
          </a>
          <a
            routerLink="/dashboard/employer/profile"
            class="p-4 rounded-lg bg-background-light/50 border border-foreground-light/20 text-left hover:border-[var(--color-accent)] transition-colors"
          >
            <h5 class="font-medium mb-1">Company Profile</h5>
            <p class="text-xs text-foreground-light">Update company info</p>
          </a>
          <a
            routerLink="/dashboard/employer/analytics"
            class="p-4 rounded-lg bg-background-light/50 border border-foreground-light/20 text-left hover:border-[var(--color-accent)] transition-colors"
          >
            <h5 class="font-medium mb-1">View Analytics</h5>
            <p class="text-xs text-foreground-light">
              Track recruitment metrics
            </p>
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Active Jobs Overview -->
          <div
            class="p-6 rounded-xl bg-background-light/30 border border-foreground-light/20"
          >
            <h4 class="text-lg font-medium mb-4">Active Job Postings</h4>
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <span class="text-sm">Total Active</span>
                <span class="font-semibold">8</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-sm">Total Views</span>
                <span class="font-semibold">324</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-sm">Applications</span>
                <span class="font-semibold text-[var(--color-accent)]">45</span>
              </div>
              <div class="mt-4">
                <a
                  [routerLink]="['/dashboard/employer/jobs']"
                  class="w-full px-4 py-2 text-sm text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 rounded-lg transition-colors block text-center"
                >
                  Manage Jobs
                </a>
              </div>
            </div>
          </div>

          <!-- Candidate Pipeline -->
          <div
            class="p-6 rounded-xl bg-background-light/30 border border-foreground-light/20"
          >
            <h4 class="text-lg font-medium mb-4">Candidate Pipeline</h4>
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <span class="text-sm">New Applications</span>
                <span class="font-semibold">23</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-sm">Screening</span>
                <span class="font-semibold text-blue-400">12</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-sm">Interviewing</span>
                <span class="font-semibold text-[var(--color-accent)]">8</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-sm">Offers Sent</span>
                <span class="font-semibold text-green-500">3</span>
              </div>
              <div
                class="h-2 bg-background-light rounded-full overflow-hidden mt-4"
              >
                <div class="h-full w-[65%] bg-[var(--color-accent)]"></div>
              </div>
            </div>
          </div>

          <!-- Response Metrics -->
          <div
            class="p-6 rounded-xl bg-background-light/30 border border-foreground-light/20"
          >
            <h4 class="text-lg font-medium mb-4">Response Metrics</h4>
            <div class="space-y-4">
              <div class="flex flex-col gap-1">
                <div class="flex justify-between text-sm">
                  <span>Response Rate</span>
                  <span>85%</span>
                </div>
                <div
                  class="h-2 bg-background-light rounded-full overflow-hidden"
                >
                  <div class="h-full w-[85%] bg-[var(--color-accent)]"></div>
                </div>
              </div>
              <div class="flex flex-col gap-1">
                <div class="flex justify-between text-sm">
                  <span>Time to Response</span>
                  <span>24h avg</span>
                </div>
                <div
                  class="h-2 bg-background-light rounded-full overflow-hidden"
                >
                  <div class="h-full w-[75%] bg-[var(--color-accent)]"></div>
                </div>
              </div>
              <div class="flex flex-col gap-1">
                <div class="flex justify-between text-sm">
                  <span>Interview Schedule Rate</span>
                  <span>92%</span>
                </div>
                <div
                  class="h-2 bg-background-light rounded-full overflow-hidden"
                >
                  <div class="h-full w-[92%] bg-[var(--color-accent)]"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Top Candidates -->
          <div
            class="md:col-span-2 p-6 rounded-xl bg-background-light/30 border border-foreground-light/20"
          >
            <div class="flex justify-between items-center mb-4">
              <h4 class="text-lg font-medium">Top Matching Candidates</h4>
              <button
                class="text-sm text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 px-3 py-1 rounded-lg transition-colors"
              >
                <a [routerLink]="['/dashboard/employer/candidates']"
                  >View All</a
                >
              </button>
            </div>
            <div class="space-y-4">
              @for (i of [1,2,3]; track i) {
              <div
                class="p-4 rounded-lg bg-background-light/50 border border-foreground-light/20 hover:border-[var(--color-accent)] transition-colors cursor-pointer"
              >
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-medium">Senior Frontend Developer</h4>
                    <p class="text-sm text-foreground-light">
                      5 years exp. • Remote preferred
                    </p>
                  </div>
                  <span
                    class="px-2 py-1 rounded bg-[var(--color-accent)]/20 text-[var(--color-accent)] text-sm"
                  >
                    98% Match
                  </span>
                </div>
                <div class="mt-2 flex gap-2">
                  <span
                    class="px-2 py-1 rounded-full bg-background-light text-xs"
                    >React</span
                  >
                  <span
                    class="px-2 py-1 rounded-full bg-background-light text-xs"
                    >TypeScript</span
                  >
                  <span
                    class="px-2 py-1 rounded-full bg-background-light text-xs"
                    >Node.js</span
                  >
                </div>
              </div>
              }
            </div>
          </div>

          <!-- Recent Activity -->
          <div
            class="p-6 rounded-xl bg-background-light/30 border border-foreground-light/20"
          >
            <div class="flex justify-between items-center mb-4">
              <h4 class="text-lg font-medium">Recent Activity</h4>
              <button
                class="text-sm text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 px-3 py-1 rounded-lg transition-colors"
              >
                View All
              </button>
            </div>
            <div class="space-y-3">
              <div class="flex items-start gap-3">
                <div
                  class="w-2 h-2 mt-2 rounded-full bg-[var(--color-accent)]"
                ></div>
                <div>
                  <p class="text-sm">
                    New application for Senior Frontend Developer
                  </p>
                  <span class="text-xs text-foreground-light">2 hours ago</span>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div
                  class="w-2 h-2 mt-2 rounded-full bg-[var(--color-accent)]"
                ></div>
                <div>
                  <p class="text-sm">Interview scheduled with John Doe</p>
                  <span class="text-xs text-foreground-light">5 hours ago</span>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div
                  class="w-2 h-2 mt-2 rounded-full bg-[var(--color-accent)]"
                ></div>
                <div>
                  <p class="text-sm">New message from candidate</p>
                  <span class="text-xs text-foreground-light">1 day ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </app-dashboard-layout>
  `,
})
export class EmployerDashboardComponent {}
