import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService, UserRole } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-[var(--color-background)]">
      <!-- Secondary Navigation -->
      <nav class="border-b border-foreground-light/20">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex items-center gap-6 h-12">
            <!-- Job Seeker Navigation -->
            <ng-container
              *ngIf="authService.currentUser?.role === 'Job Seeker'"
            >
              <a
                routerLink="/dashboard/seeker/overview"
                routerLinkActive="text-[var(--color-accent)] border-b-2 border-[var(--color-accent)]"
                class="h-full flex items-center px-3 hover:text-[var(--color-accent)]"
                >Overview</a
              >
              <a
                routerLink="/dashboard/seeker/profile"
                routerLinkActive="text-[var(--color-accent)] border-b-2 border-[var(--color-accent)]"
                class="h-full flex items-center px-3 hover:text-[var(--color-accent)]"
                >Profile</a
              >
              <a
                routerLink="/dashboard/seeker/cv"
                routerLinkActive="text-[var(--color-accent)] border-b-2 border-[var(--color-accent)]"
                class="h-full flex items-center px-3 hover:text-[var(--color-accent)]"
                >CV</a
              >
              <a
                routerLink="/dashboard/seeker/skills"
                routerLinkActive="text-[var(--color-accent)] border-b-2 border-[var(--color-accent)]"
                class="h-full flex items-center px-3 hover:text-[var(--color-accent)]"
                >Skills</a
              >
              <a
                routerLink="/dashboard/seeker/matches"
                routerLinkActive="text-[var(--color-accent)] border-b-2 border-[var(--color-accent)]"
                class="h-full flex items-center px-3 hover:text-[var(--color-accent)]"
                >Matches</a
              >
            </ng-container>

            <!-- Employer Navigation -->
            <ng-container
              *ngIf="authService.currentUser?.role === 'Employer/Recruiter'"
            >
              <a
                routerLink="/dashboard/employer/overview"
                routerLinkActive="text-[var(--color-accent)] border-b-2 border-[var(--color-accent)]"
                class="h-full flex items-center px-3 hover:text-[var(--color-accent)]"
                >Overview</a
              >
              <a
                routerLink="/dashboard/employer/jobs"
                routerLinkActive="text-[var(--color-accent)] border-b-2 border-[var(--color-accent)]"
                class="h-full flex items-center px-3 hover:text-[var(--color-accent)]"
                >Jobs</a
              >
              <a
                routerLink="/dashboard/employer/candidates"
                routerLinkActive="text-[var(--color-accent)] border-b-2 border-[var(--color-accent)]"
                class="h-full flex items-center px-3 hover:text-[var(--color-accent)]"
                >Candidates</a
              >
              <a
                routerLink="/dashboard/employer/analytics"
                routerLinkActive="text-[var(--color-accent)] border-b-2 border-[var(--color-accent)]"
                class="h-full flex items-center px-3 hover:text-[var(--color-accent)]"
                >Analytics</a
              >
              <a
                routerLink="/dashboard/employer/profile"
                routerLinkActive="text-[var(--color-accent)] border-b-2 border-[var(--color-accent)]"
                class="h-full flex items-center px-3 hover:text-[var(--color-accent)]"
                >Company Profile</a
              >
            </ng-container>
          </div>
        </div>
      </nav>

      <!-- Main Content -->
      <main class="max-w-7xl mx-auto px-4 py-8">
        <ng-content></ng-content>
      </main>
    </div>
  `,
})
export class DashboardLayoutComponent {
  constructor(public authService: AuthService) {}
}
