import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from '../dashboard-layout/dashboard-layout.component';

@Component({
  selector: 'app-seeker-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, DashboardLayoutComponent],
  template: `
    <app-dashboard-layout>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <!-- Profile Snapshot -->
        <div
          class="p-6 rounded-xl bg-background-light/30 border border-foreground-light/20"
        >
          <div class="flex items-center gap-4 mb-4">
            <img
              src="/images/profile-placeholder.jpeg"
              alt="Profile"
              class="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h4 class="text-lg font-medium">John Doe</h4>
              <p class="text-sm text-foreground-light">
                Senior Frontend Developer
              </p>
            </div>
          </div>
          <div class="space-y-2">
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
              <span
                class="px-2 py-1 rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] text-xs"
                >+5 more</span
              >
            </div>
            <div class="flex items-center gap-2 text-sm text-foreground-light">
              <span>5 years experience</span>
              <span>•</span>
              <span>Remote preferred</span>
            </div>
          </div>
        </div>

        <!-- Quick Actions -->
        <div
          class="p-6 rounded-xl bg-background-light/30 border border-foreground-light/20"
        >
          <h4 class="text-lg mb-4">Quick Actions</h4>
          <div class="grid grid-cols-2 gap-4">
            <a
              routerLink="/dashboard/profile"
              class="p-4 rounded-lg bg-background-light/50 border border-foreground-light/20 text-left hover:border-[var(--color-accent)] transition-colors"
            >
              <h5 class="font-medium mb-1">Update Profile</h5>
              <p class="text-xs text-foreground-light">
                Keep your profile current
              </p>
            </a>
            <a
              routerLink="/dashboard/cv-upload"
              class="p-4 rounded-lg bg-background-light/50 border border-foreground-light/20 text-left hover:border-[var(--color-accent)] transition-colors"
            >
              <h5 class="font-medium mb-1">Upload CV</h5>
              <p class="text-xs text-foreground-light">Add or update your CV</p>
            </a>
            <a
              routerLink="/dashboard/job-matches"
              class="p-4 rounded-lg bg-background-light/50 border border-foreground-light/20 text-left hover:border-[var(--color-accent)] transition-colors"
            >
              <h5 class="font-medium mb-1">View Matches</h5>
              <p class="text-xs text-foreground-light">See your job matches</p>
            </a>
            <a
              routerLink="/dashboard/career-guidance"
              class="p-4 rounded-lg bg-background-light/50 border border-foreground-light/20 text-left hover:border-[var(--color-accent)] transition-colors"
            >
              <h5 class="font-medium mb-1">Career Path</h5>
              <p class="text-xs text-foreground-light">Explore opportunities</p>
            </a>
          </div>
        </div>

        <!-- Notifications -->
        <div
          class="p-6 rounded-xl bg-background-light/30 border border-foreground-light/20"
        >
          <h4 class="text-lg mb-4">Notifications</h4>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div
                class="w-2 h-2 mt-2 rounded-full bg-[var(--color-accent)]"
              ></div>
              <div>
                <p class="text-sm">Interview scheduled with TechCorp Inc.</p>
                <span class="text-xs text-foreground-light"
                  >Today, 2:00 PM</span
                >
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div
                class="w-2 h-2 mt-2 rounded-full bg-[var(--color-accent)]"
              ></div>
              <div>
                <p class="text-sm">New job match: Senior Frontend Developer</p>
                <span class="text-xs text-foreground-light">2 hours ago</span>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div
                class="w-2 h-2 mt-2 rounded-full bg-[var(--color-accent)]"
              ></div>
              <div>
                <p class="text-sm">Application viewed by InnovateHub</p>
                <span class="text-xs text-foreground-light">Yesterday</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Application Progress -->
        <div
          class="md:col-span-2 p-6 rounded-xl bg-background-light/30 border border-foreground-light/20"
        >
          <h4 class="text-lg mb-4">Application Progress</h4>
          <div class="grid grid-cols-4 gap-4">
            <div class="p-4 rounded-lg bg-background-light/50 text-center">
              <span class="text-2xl font-bold block">12</span>
              <span class="text-sm text-foreground-light">Total Applied</span>
            </div>
            <div class="p-4 rounded-lg bg-background-light/50 text-center">
              <span class="text-2xl font-bold text-blue-400 block">5</span>
              <span class="text-sm text-foreground-light">In Review</span>
            </div>
            <div class="p-4 rounded-lg bg-background-light/50 text-center">
              <span class="text-2xl font-bold text-[var(--color-accent)] block"
                >3</span
              >
              <span class="text-sm text-foreground-light">Interviews</span>
            </div>
            <div class="p-4 rounded-lg bg-background-light/50 text-center">
              <span class="text-2xl font-bold text-green-500 block">2</span>
              <span class="text-sm text-foreground-light">Offers</span>
            </div>
          </div>
          <div class="mt-6">
            <div class="h-2 bg-background-light rounded-full overflow-hidden">
              <div class="h-full w-[60%] bg-[var(--color-accent)]"></div>
            </div>
            <p class="text-sm text-foreground-light mt-2">
              60% success rate in reaching interview stage
            </p>
          </div>
        </div>

        <!-- Recent Activity -->
        <div
          class="p-6 rounded-xl bg-background-light/30 border border-foreground-light/20"
        >
          <h4 class="text-lg mb-4">Recent Activity</h4>
          <div class="space-y-4">
            <div class="text-sm">
              <p class="font-medium">Profile viewed by 3 recruiters</p>
              <p class="text-xs text-foreground-light">Last 7 days</p>
            </div>
            <div class="text-sm">
              <p class="font-medium">Skills endorsed: React, TypeScript</p>
              <p class="text-xs text-foreground-light">By John Smith</p>
            </div>
            <div class="text-sm">
              <p class="font-medium">Learning path progress: 60%</p>
              <p class="text-xs text-foreground-light">
                System Design Fundamentals
              </p>
            </div>
          </div>
          <button
            class="w-full mt-4 px-4 py-2 text-sm text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 rounded-lg transition-colors"
          >
            View All Activity
          </button>
        </div>
      </div>
    </app-dashboard-layout>
  `,
})
export class SeekerDashboardComponent {}
