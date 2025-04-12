import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type UserRole = 'Job Seeker' | 'Employer/Recruiter';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  companyName?: string;
  hasCompletedOnboarding: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(
    this.getMockUser()
  );
  currentUser$ = this.currentUserSubject.asObservable();

  constructor() {
    // Always have a mock user for development
    this.currentUserSubject.next(this.getMockUser());
  }

  get currentUser(): User | null {
    return this.getMockUser();
  }

  private getMockUser(): User {
    return {
      id: '1',
      email: 'dev@example.com',
      firstName: 'Dev',
      lastName: 'User',
      role: 'Job Seeker',
      hasCompletedOnboarding: true,
    };
  }

  // Simulate login - no validation needed for development
  async login(email: string, password: string): Promise<User> {
    return this.getMockUser();
  }

  // Simulate registration - no validation needed for development
  async register(data: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: UserRole;
    companyName?: string;
  }): Promise<User> {
    return this.getMockUser();
  }

  // Complete onboarding - no validation needed for development
  async completeOnboarding(data: any): Promise<void> {
    // Do nothing in development
  }

  // Skip onboarding - no validation needed for development
  async skipOnboarding(): Promise<void> {
    // Do nothing in development
  }

  logout(): void {
    // Do nothing in development
  }
}
