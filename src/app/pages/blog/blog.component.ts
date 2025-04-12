import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto px-4 py-12">
      <h1 class="text-3xl font-bold mb-8">Blog</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ng-container *ngFor="let post of blogPosts; trackBy: trackById">
          <article
            class="rounded-xl bg-background-light/30 border border-foreground-light/20 overflow-hidden"
          >
            <img
              [src]="post.image"
              [alt]="post.title"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <div
                class="flex items-center gap-2 text-sm text-foreground-light mb-2"
              >
                <span>{{ post.date }}</span>
                <span>•</span>
                <span>{{ post.category }}</span>
              </div>
              <h2 class="text-xl font-semibold mb-2">{{ post.title }}</h2>
              <p class="text-foreground-light mb-4">{{ post.excerpt }}</p>
              <a href="#" class="text-[var(--color-accent)] hover:underline"
                >Read More</a
              >
            </div>
          </article>
        </ng-container>
      </div>
    </div>
  `,
})
export class BlogComponent {
  blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Recruitment',
      excerpt:
        'Discover how artificial intelligence is transforming the hiring process and what it means for job seekers and employers.',
      image: '/images/skill-match.jpeg',
      date: 'April 10, 2025',
      category: 'Technology',
    },
    {
      id: 2,
      title: 'Top Skills for 2025',
      excerpt:
        "Learn about the most in-demand skills that employers are looking for in today's rapidly evolving job market.",
      image: '/images/career-guidance.jpeg',
      date: 'April 8, 2025',
      category: 'Career Development',
    },
    {
      id: 3,
      title: 'Remote Work Best Practices',
      excerpt:
        'Tips and strategies for successful remote work collaboration and productivity in the modern workplace.',
      image: '/images/recruiter-engagement.jpeg',
      date: 'April 5, 2025',
      category: 'Workplace',
    },
  ];

  trackById(index: number, post: any): number {
    return post.id;
  }
}
