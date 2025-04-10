import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto px-4 py-12">
      <h1 class="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      <div class="space-y-6">
        @for (item of faqItems; track item.question) {
        <div>
          <h2 class="text-xl font-semibold mb-2">{{ item.question }}</h2>
          <p class="text-foreground-light">{{ item.answer }}</p>
        </div>
        }
      </div>
    </div>
  `,
})
export class FaqComponent {
  faqItems = [
    {
      question: 'How does SkillMatch work?',
      answer:
        'SkillMatch uses AI-powered algorithms to analyze your skills, experience, and preferences to connect you with the most relevant job opportunities or candidates.',
    },
    {
      question: 'Is SkillMatch free for job seekers?',
      answer:
        "Yes, job seekers can use SkillMatch's basic features completely free of charge. Premium features are available for enhanced visibility and additional tools.",
    },
    {
      question: 'How do I create an account?',
      answer:
        'Click the "Sign Up" button in the top right corner and follow the simple registration process. You can sign up using your email or connect with your Google or GitHub account.',
    },
    {
      question: 'How can employers post jobs?',
      answer:
        'Employers can create an account, verify their company details, and start posting jobs through our user-friendly dashboard. Various subscription plans are available.',
    },
    {
      question: 'What makes SkillMatch different?',
      answer:
        'Our advanced AI matching system, real-time engagement features, and comprehensive career guidance tools set us apart from traditional job boards.',
    },
  ];
}
