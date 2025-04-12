import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';
import { ButtonComponent } from '../button/button.component';
import { AuthService, UserRole } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, LogoComponent, ButtonComponent],
  template: `
    <header
      class="w-screen sticky top-0 z-50 bg-background border-b border-foreground-light/30"
    >
      <div
        class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-6"
      >
        <div class="flex items-center gap-8">
          <a routerLink="/" class="hover:opacity-90">
            <app-logo size="md"></app-logo>
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center gap-6">
            <ng-container *ngIf="!authService.currentUser; else loggedInNav">
              <a routerLink="/" class="hover:text-[var(--color-accent)]"
                >Home</a
              >
              <a routerLink="/about" class="hover:text-[var(--color-accent)]"
                >About</a
              >
              <a routerLink="/faq" class="hover:text-[var(--color-accent)]"
                >FAQ</a
              >
            </ng-container>

            <ng-template #loggedInNav>
              <ng-container
                *ngIf="
                  authService.currentUser?.role === 'Job Seeker';
                  else employerNav
                "
              >
                <a
                  routerLink="/dashboard/seeker/overview"
                  routerLinkActive="text-[var(--color-accent)]"
                  class="hover:text-[var(--color-accent)]"
                  >Dashboard</a
                >
                <a
                  routerLink="/dashboard/seeker/jobs"
                  routerLinkActive="text-[var(--color-accent)]"
                  class="hover:text-[var(--color-accent)]"
                  >Jobs</a
                >
                <a
                  routerLink="/dashboard/seeker/applications"
                  routerLinkActive="text-[var(--color-accent)]"
                  class="hover:text-[var(--color-accent)]"
                  >Applications</a
                >
                <a
                  routerLink="/dashboard/seeker/career"
                  routerLinkActive="text-[var(--color-accent)]"
                  class="hover:text-[var(--color-accent)]"
                  >Career</a
                >
              </ng-container>
              <ng-template #employerNav>
                <a
                  routerLink="/dashboard/employer/overview"
                  routerLinkActive="text-[var(--color-accent)]"
                  class="hover:text-[var(--color-accent)]"
                  >Dashboard</a
                >
                <a
                  routerLink="/dashboard/employer/jobs"
                  routerLinkActive="text-[var(--color-accent)]"
                  class="hover:text-[var(--color-accent)]"
                  >Job Postings</a
                >
                <a
                  routerLink="/dashboard/employer/candidates"
                  routerLinkActive="text-[var(--color-accent)]"
                  class="hover:text-[var(--color-accent)]"
                  >Candidates</a
                >
              </ng-template>
              <a
                routerLink="/dashboard/messages"
                routerLinkActive="text-[var(--color-accent)]"
                class="hover:text-[var(--color-accent)]"
                >Messages</a
              >
            </ng-template>
          </nav>
        </div>

        <!-- Auth Buttons/Profile -->
        <div class="flex items-center gap-4">
          <ng-container *ngIf="!authService.currentUser; else profileMenu">
            <a routerLink="/register">
              <app-button size="sm" variant="secondary">Sign Up</app-button>
            </a>
            <a routerLink="/login">
              <app-button size="sm" variant="primary">Log In</app-button>
            </a>
          </ng-container>

          <ng-template #profileMenu>
            <div class="flex items-center gap-4">
              <a
                [routerLink]="['/dashboard', getDashboardRoute(), 'profile']"
                class="flex items-center gap-2 hover:text-[var(--color-accent)]"
              >
                <div
                  class="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-background font-medium"
                >
                  {{ getInitial() }}
                </div>
                <span class="text-sm hidden md:inline">{{
                  authService.currentUser?.firstName
                }}</span>
              </a>
              <app-button size="sm" variant="outline" (click)="logout()"
                >Sign Out</app-button
              >
            </div>
          </ng-template>
        </div>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  constructor(public authService: AuthService) {}

  getDashboardRoute(): string {
    return this.authService.currentUser?.role === 'Job Seeker'
      ? 'seeker'
      : 'employer';
  }

  getInitial(): string {
    return this.authService.currentUser?.firstName?.charAt(0) ?? '';
  }

  logout() {
    this.authService.logout();
  }
}
