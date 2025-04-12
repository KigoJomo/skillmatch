import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';
import { ButtonComponent } from '../button/button.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, LogoComponent, ButtonComponent],
  template: `
    <header
      class="w-screen sticky top-0 z-50 bg-background border-b border-foreground-light/30 flex items-center justify-between gap-6 px-6 py-3"
    >
      <div class="flex items-center gap-8">
        <a routerLink="/" class="hover:opacity-90">
          <app-logo size="md"></app-logo>
        </a>

        <nav class="flex items-center gap-6">
          @if (!authService.currentUser) {
          <a routerLink="/" class="hover:text-[var(--color-accent)]">Home</a>
          <a routerLink="/about" class="hover:text-[var(--color-accent)]"
            >About</a
          >
          <a routerLink="/faq" class="hover:text-[var(--color-accent)]">FAQ</a>
          <a routerLink="/contact" class="hover:text-[var(--color-accent)]"
            >Contact</a
          >
          } @else {
          <a
            [routerLink]="[
              '/dashboard',
              authService.currentUser.role === 'Job Seeker'
                ? 'seeker'
                : 'employer'
            ]"
            routerLinkActive="text-[var(--color-accent)]"
            class="hover:text-[var(--color-accent)]"
          >
            Dashboard
          </a>
          @if (authService.currentUser.role === 'Job Seeker') {
          <a
            routerLink="/dashboard/jobs"
            routerLinkActive="text-[var(--color-accent)]"
            class="hover:text-[var(--color-accent)]"
            >Jobs</a
          >
          <a
            routerLink="/dashboard/applications"
            routerLinkActive="text-[var(--color-accent)]"
            class="hover:text-[var(--color-accent)]"
            >Applications</a
          >
          <a
            routerLink="/dashboard/skills"
            routerLinkActive="text-[var(--color-accent)]"
            class="hover:text-[var(--color-accent)]"
            >Skills</a
          >
          <a
            routerLink="/dashboard/job-matches"
            routerLinkActive="text-[var(--color-accent)]"
            class="hover:text-[var(--color-accent)]"
            >Job Matches</a
          >
          <a
            routerLink="/dashboard/cv-upload"
            routerLinkActive="text-[var(--color-accent)]"
            class="hover:text-[var(--color-accent)]"
            >Upload CV</a
          >
          <a
            routerLink="/dashboard/career-guidance"
            routerLinkActive="text-[var(--color-accent)]"
            class="hover:text-[var(--color-accent)]"
            >Career Guidance</a
          >
          } @else {
          <a
            routerLink="/dashboard/candidates"
            routerLinkActive="text-[var(--color-accent)]"
            class="hover:text-[var(--color-accent)]"
            >Candidates</a
          >
          <a
            routerLink="/dashboard/postings"
            routerLinkActive="text-[var(--color-accent)]"
            class="hover:text-[var(--color-accent)]"
            >Job Postings</a
          >
          }
          <a
            routerLink="/dashboard/messages"
            routerLinkActive="text-[var(--color-accent)]"
            class="hover:text-[var(--color-accent)]"
            >Messages</a
          >
          }
        </nav>
      </div>

      <div class="flex items-center gap-4">
        @if (!authService.currentUser) {
        <a routerLink="/register" class="cursor-pointer">
          <app-button size="sm" variant="secondary" size="sm"
            >Sign Up</app-button
          >
        </a>
        <a routerLink="/login" class="cursor-pointer">
          <app-button size="sm" variant="primary" size="sm">Log In</app-button>
        </a>
        } @else {
        <a
          [routerLink]="['/dashboard', 'profile']"
          class="flex items-center gap-2 hover:text-[var(--color-accent)]"
        >
          <div
            class="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-background font-medium"
          >
            {{ authService.currentUser.firstName.charAt(0) }}
          </div>
          <span class="text-sm">{{ authService.currentUser.firstName }}</span>
        </a>
        <app-button
          size="sm"
          variant="outline"
          size="sm"
          (click)="authService.logout()"
          >Sign Out</app-button
        >
        }
      </div>
    </header>
  `,
})
export class HeaderComponent {
  constructor(public authService: AuthService) {}
}
