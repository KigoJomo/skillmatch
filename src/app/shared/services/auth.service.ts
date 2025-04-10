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
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor() {
    // In a real app, we would check localStorage/sessionStorage and validate the token
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      this.currentUserSubject.next(JSON.parse(savedUser));
    }
  }

  get currentUser(): User | null {
    return this.currentUserSubject.value;
  }

  // Simulate login
  async login(email: string, password: string): Promise<User> {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock user for demo
    const user: User = {
      id: '1',
      email,
      firstName: 'John',
      lastName: 'Doe',
      role: 'Job Seeker',
      hasCompletedOnboarding: false,
    };

    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
    return user;
  }

  // Simulate registration
  async register(data: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: UserRole;
    companyName?: string;
  }): Promise<User> {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const user: User = {
      id: '1',
      ...data,
      hasCompletedOnboarding: false,
    };

    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
    return user;
  }

  // Complete onboarding
  async completeOnboarding(data: any): Promise<void> {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const user = this.currentUser;
    if (user) {
      const updatedUser = { ...user, hasCompletedOnboarding: true };
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      this.currentUserSubject.next(updatedUser);
    }
  }

  // Skip onboarding
  async skipOnboarding(): Promise<void> {
    const user = this.currentUser;
    if (user) {
      const updatedUser = { ...user, hasCompletedOnboarding: true };
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      this.currentUserSubject.next(updatedUser);
    }
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
