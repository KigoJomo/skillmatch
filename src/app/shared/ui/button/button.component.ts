import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [type]="type"
      [disabled]="disabled || loading"
      [class.w-full]="fullWidth"
      [class.opacity-75]="loading"
      [class.cursor-wait]="loading"
      [ngClass]="{
        'bg-[var(--color-accent)] text-[var(--color-background)]':
          variant === 'primary',
        'border border-[var(--color-foreground-light)]/30':
          variant === 'outline'
      }"
      class="px-4 py-2 rounded-md font-medium transition-colors relative flex items-center justify-center"
    >
      <div
        *ngIf="loading"
        class="absolute inset-0 flex items-center justify-center"
      >
        <svg
          class="animate-spin h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
      <span [class.invisible]="loading">
        <ng-content></ng-content>
      </span>
    </button>
  `,
  styles: [],
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() loading = false;
  @Input() fullWidth = false;

  @Input() class = ''; // Add this line to accept additional classes

  getButtonClasses(): string {
    const baseClasses =
      'rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer';
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    const variantClasses = {
      primary:
        'bg-[var(--color-accent)] text-[var(--color-background)] hover:bg-[var(--color-accent)]/90 focus:ring-[var(--color-accent)]',
      secondary:
        'bg-[var(--color-background-light)] text-[var(--color-foreground)] hover:bg-[var(--color-background-light)]/90 focus:ring-[var(--color-background-light)]',
      outline:
        'border-2 border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 focus:ring-[var(--color-accent)]',
    };

    const disabledClasses = this.disabled
      ? 'opacity-50 cursor-not-allowed'
      : '';

    return `${baseClasses} ${sizeClasses[this.size]} ${
      variantClasses[this.variant]
    } ${disabledClasses} ${this.class}`.trim();
  }
}
