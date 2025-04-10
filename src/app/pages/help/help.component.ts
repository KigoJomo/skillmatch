import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container mx-auto px-4 py-12">
      <h1 class="text-3xl font-bold mb-8">Help Center</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        @for (category of helpCategories; track category.id) {
        <div
          class="p-6 rounded-xl bg-background-light/30 border border-foreground-light/20"
        >
          <h2 class="text-xl font-semibold mb-4">{{ category.title }}</h2>
          <ul class="space-y-3">
            @for (item of category.items; track item) {
            <li>
              <a
                routerLink="{{ item.link }}"
                class="text-[var(--color-accent)] hover:underline"
              >
                {{ item.title }}
              </a>
            </li>
            }
          </ul>
        </div>
        }
      </div>

      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-2xl font-bold mb-4">
          Can't find what you're looking for?
        </h2>
        <p class="text-foreground-light mb-6">
          Our support team is here to help. Contact us and we'll get back to you
          as soon as possible.
        </p>
        <div class="flex justify-center gap-6">
          <a
            href="mailto:support@skillmatch.com"
            class="px-6 py-2 rounded-lg bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent)]/90"
          >
            Email Support
          </a>
          <a
            routerLink="/contact"
            class="px-6 py-2 rounded-lg border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  `,
})
export class HelpComponent {
  helpCategories = [
    {
      id: 1,
      title: 'Getting Started',
      items: [
        { title: 'How to Create an Account', link: '/help/create-account' },
        { title: 'Complete Your Profile', link: '/help/complete-profile' },
        { title: 'Upload Your CV', link: '/help/upload-cv' },
        { title: 'Search for Jobs', link: '/help/search-jobs' },
        { title: 'Understanding Job Matches', link: '/help/job-matches' },
      ],
    },
    {
      id: 2,
      title: 'For Job Seekers',
      items: [
        { title: 'Applying for Jobs', link: '/help/applying-jobs' },
        { title: 'Track Applications', link: '/help/track-applications' },
        { title: 'Career Guidance Tools', link: '/help/career-guidance' },
        { title: 'Skills Assessment', link: '/help/skills-assessment' },
        {
          title: 'Profile Visibility Settings',
          link: '/help/profile-settings',
        },
      ],
    },
    {
      id: 3,
      title: 'For Employers',
      items: [
        { title: 'Post a Job', link: '/help/post-job' },
        { title: 'Search Candidates', link: '/help/search-candidates' },
        { title: 'Manage Job Listings', link: '/help/manage-jobs' },
        { title: 'Interview Scheduling', link: '/help/schedule-interviews' },
        { title: 'Subscription Plans', link: '/help/subscription-plans' },
      ],
    },
    {
      id: 4,
      title: 'Account Management',
      items: [
        { title: 'Update Account Settings', link: '/help/account-settings' },
        { title: 'Change Password', link: '/help/change-password' },
        { title: 'Privacy Settings', link: '/help/privacy-settings' },
        { title: 'Notifications Setup', link: '/help/notifications' },
        { title: 'Delete Account', link: '/help/delete-account' },
      ],
    },
    {
      id: 5,
      title: 'Technical Support',
      items: [
        { title: 'System Requirements', link: '/help/system-requirements' },
        { title: 'Browser Compatibility', link: '/help/browser-compatibility' },
        { title: 'Mobile App Support', link: '/help/mobile-support' },
        { title: 'Known Issues', link: '/help/known-issues' },
        { title: 'Bug Reports', link: '/help/bug-reports' },
      ],
    },
    {
      id: 6,
      title: 'Billing & Subscriptions',
      items: [
        { title: 'Pricing Plans', link: '/help/pricing' },
        { title: 'Payment Methods', link: '/help/payment-methods' },
        { title: 'Billing History', link: '/help/billing-history' },
        { title: 'Cancel Subscription', link: '/help/cancel-subscription' },
        { title: 'Refund Policy', link: '/help/refund-policy' },
      ],
    },
  ];
}
