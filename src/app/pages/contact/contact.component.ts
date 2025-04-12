import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../shared/ui/button/button.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  template: `
    <div class="container mx-auto px-4 py-12">
      <h1 class="text-3xl font-bold mb-8">Contact Us</h1>
      <div class="max-w-2xl">
        <form
          [formGroup]="contactForm"
          (ngSubmit)="onSubmit()"
          class="space-y-6"
        >
          <div>
            <label class="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              formControlName="name"
              class="w-full px-4 py-2 rounded-lg border border-foreground-light/20 bg-background-light"
            />
          </div>
          <div>
            <label class="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              formControlName="email"
              class="w-full px-4 py-2 rounded-lg border border-foreground-light/20 bg-background-light"
            />
          </div>
          <div>
            <label class="block text-sm font-medium mb-2">Subject</label>
            <input
              type="text"
              formControlName="subject"
              class="w-full px-4 py-2 rounded-lg border border-foreground-light/20 bg-background-light"
            />
          </div>
          <div>
            <label class="block text-sm font-medium mb-2">Message</label>
            <textarea
              formControlName="message"
              rows="6"
              class="w-full px-4 py-2 rounded-lg border border-foreground-light/20 bg-background-light"
            ></textarea>
          </div>
          <app-button type="submit" [disabled]="!contactForm.valid">
            Send Message
          </app-button>
        </form>
      </div>
    </div>
  `,
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // TODO: Implement contact form submission
      console.log(this.contactForm.value);
    }
  }
}
