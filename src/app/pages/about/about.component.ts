import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto px-4 py-12">
      <h1 class="text-3xl font-bold mb-8">About SkillMatch</h1>
      <div class="prose max-w-none">
        <p class="mb-4">
          SkillMatch is a cutting-edge platform that connects talented
          professionals with exciting career opportunities. Our AI-powered
          matching system ensures that job seekers find positions that align
          perfectly with their skills and career goals, while helping employers
          discover ideal candidates.
        </p>
        <h2 class="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
        <p class="mb-4">
          We're on a mission to transform the job search and recruitment process
          by leveraging advanced technology and data-driven insights to create
          perfect matches between talent and opportunities.
        </p>
        <h2 class="text-2xl font-bold mt-8 mb-4">Our Vision</h2>
        <p class="mb-4">
          We envision a future where finding the right job or candidate is
          effortless, efficient, and rewarding for everyone involved in the
          process.
        </p>
      </div>
    </div>
  `,
})
export class AboutComponent {}
