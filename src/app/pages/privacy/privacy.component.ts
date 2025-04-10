import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto px-4 py-12">
      <h1 class="text-3xl font-bold mb-8">Privacy Policy</h1>
      <div class="prose max-w-none space-y-6">
        <section>
          <h2 class="text-2xl font-bold mb-4">Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, including
            when you:
          </p>
          <ul class="list-disc ml-6 mt-2">
            <li>Create an account and profile</li>
            <li>Upload your CV and other documents</li>
            <li>Apply for jobs</li>
            <li>Contact us for support</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul class="list-disc ml-6 mt-2">
            <li>Match you with relevant job opportunities</li>
            <li>Improve our AI matching algorithms</li>
            <li>Communicate with you about your account</li>
            <li>Provide customer support</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4">Data Security</h2>
          <p>
            We implement appropriate technical and organizational security
            measures to protect your personal information against unauthorized
            access, modification, and deletion.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4">Your Rights</h2>
          <p>You have the right to:</p>
          <ul class="list-disc ml-6 mt-2">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at privacy&#64;skillmatch.com
          </p>
        </section>
      </div>
    </div>
  `,
})
export class PrivacyComponent {}
