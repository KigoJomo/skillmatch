import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { OnboardingComponent } from './pages/auth/onboarding/onboarding.component';
import { HomeComponent } from './pages/home/home.component';
import { SeekerDashboardComponent } from './pages/dashboard/seeker-dashboard/seeker-dashboard.component';
import { EmployerDashboardComponent } from './pages/dashboard/employer-dashboard/employer-dashboard.component';
import { ProfileComponent } from './pages/dashboard/profile/profile.component';
import { inject } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';

// Auth guard function
const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.currentUser) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};

// Role guard function
const roleGuard = (allowedRole: 'Job Seeker' | 'Employer/Recruiter') => () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.currentUser?.role !== allowedRole) {
    router.navigate([
      '/dashboard',
      authService.currentUser?.role === 'Job Seeker' ? 'seeker' : 'employer',
    ]);
    return false;
  }
  return true;
};

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'careers',
    loadComponent: () =>
      import('./pages/careers/careers.component').then(
        (m) => m.CareersComponent
      ),
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./pages/blog/blog.component').then((m) => m.BlogComponent),
  },
  {
    path: 'help',
    loadComponent: () =>
      import('./pages/help/help.component').then((m) => m.HelpComponent),
  },
  {
    path: 'faq',
    loadComponent: () =>
      import('./pages/faq/faq.component').then((m) => m.FaqComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },
  {
    path: 'privacy',
    loadComponent: () =>
      import('./pages/privacy/privacy.component').then(
        (m) => m.PrivacyComponent
      ),
  },
  {
    path: 'terms',
    loadComponent: () =>
      import('./pages/terms/terms.component').then((m) => m.TermsComponent),
  },
  {
    path: 'onboarding',
    component: OnboardingComponent,
    canActivate: [authGuard],
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    children: [
      // Job seeker routes
      {
        path: 'seeker',
        component: SeekerDashboardComponent,
        canActivate: [() => roleGuard('Job Seeker')()],
      },
      {
        path: 'jobs',
        loadComponent: () =>
          import('./pages/dashboard/jobs/jobs.component').then(
            (m) => m.JobsComponent
          ),
        canActivate: [() => roleGuard('Job Seeker')()],
      },
      {
        path: 'applications',
        loadComponent: () =>
          import('./pages/dashboard/applications/applications.component').then(
            (m) => m.ApplicationsComponent
          ),
        canActivate: [() => roleGuard('Job Seeker')()],
      },
      {
        path: 'skills',
        loadComponent: () =>
          import('./pages/dashboard/skills/skills.component').then(
            (m) => m.SkillsComponent
          ),
        canActivate: [() => roleGuard('Job Seeker')()],
      },
      {
        path: 'cv-upload',
        loadComponent: () =>
          import('./pages/dashboard/cv-upload/cv-upload.component').then(
            (m) => m.CvUploadComponent
          ),
        canActivate: [() => roleGuard('Job Seeker')()],
      },
      {
        path: 'job-matches',
        loadComponent: () =>
          import('./pages/dashboard/job-matches/job-matches.component').then(
            (m) => m.JobMatchesComponent
          ),
        canActivate: [() => roleGuard('Job Seeker')()],
      },
      {
        path: 'career-guidance',
        loadComponent: () =>
          import(
            './pages/dashboard/career-guidance/career-guidance.component'
          ).then((m) => m.CareerGuidanceComponent),
        canActivate: [() => roleGuard('Job Seeker')()],
      },
      // Recruiter routes
      {
        path: 'employer',
        component: EmployerDashboardComponent,
        canActivate: [() => roleGuard('Employer/Recruiter')()],
      },
      {
        path: 'postings',
        loadComponent: () =>
          import('./pages/dashboard/job-posting/job-posting.component').then(
            (c) => c.JobPostingComponent
          ),
        canActivate: [() => roleGuard('Employer/Recruiter')()],
      },
      {
        path: 'candidates',
        loadComponent: () =>
          import('./pages/dashboard/candidates/candidates.component').then(
            (c) => c.CandidatesComponent
          ),
        canActivate: [() => roleGuard('Employer/Recruiter')()],
      },
      // Shared routes
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [authGuard],
      },
      {
        path: 'messages',
        loadComponent: () =>
          import('./pages/dashboard/messages/messages.component').then(
            (c) => c.MessagesComponent
          ),
        canActivate: [authGuard],
      },
      {
        path: '',
        redirectTo: 'seeker',
        pathMatch: 'full',
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
