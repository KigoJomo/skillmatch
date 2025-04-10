import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from '../dashboard-layout/dashboard-layout.component';

@Component({
  selector: 'app-cv-upload',
  standalone: true,
  imports: [CommonModule, DashboardLayoutComponent],
  template: `
    <app-dashboard-layout>
      <div class="max-w-4xl mx-auto p-6">
        <h2 class="text-2xl font-semibold mb-6">CV Upload & Processing</h2>

        <!-- Enhanced CV Upload Area -->
        <div class="space-y-6">
          <div
            class="border-2 border-dashed border-foreground-light/20 rounded-lg p-8 text-center hover:border-[var(--color-accent)] transition-colors cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-12 h-12 mx-auto mb-4 text-foreground-light"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h3 class="text-lg font-medium mb-2">Upload Your CV</h3>
            <p class="text-sm mb-2">Drag and drop your CV here</p>
            <p class="text-xs text-foreground-light mb-4">or click to browse</p>
            <button
              class="px-4 py-2 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent)]/90 transition-colors"
            >
              Choose File
            </button>
          </div>

          <!-- Upload Progress -->
          <div class="bg-background-light/30 rounded-lg p-6">
            <h4 class="font-medium mb-4">Upload Progress</h4>
            <div class="space-y-4">
              <div class="h-2 bg-background-light rounded-full overflow-hidden">
                <div
                  class="h-full w-0 bg-[var(--color-accent)] transition-all duration-300"
                ></div>
              </div>
              <div class="flex justify-between text-sm text-foreground-light">
                <span>Uploading...</span>
                <span>0%</span>
              </div>
            </div>
          </div>

          <!-- Previously Uploaded CVs -->
          <div class="bg-background-light/30 rounded-lg p-6">
            <h4 class="font-medium mb-4">Previously Uploaded CVs</h4>
            <div class="space-y-3">
              <div
                class="flex items-center justify-between p-3 bg-background-light/50 rounded-lg"
              >
                <div class="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-foreground-light"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <div>
                    <p class="text-sm font-medium">MyCV_2024.pdf</p>
                    <p class="text-xs text-foreground-light">
                      Uploaded on April 1, 2024
                    </p>
                  </div>
                </div>
                <button
                  class="text-[var(--color-accent)] hover:text-[var(--color-accent)]/80"
                >
                  Download
                </button>
              </div>
            </div>
          </div>

          <!-- Parsing Preview -->
          <div class="bg-background-light/30 rounded-lg p-6">
            <h4 class="font-medium mb-4">CV Analysis</h4>
            <div class="space-y-4">
              <div>
                <h5 class="text-sm font-medium mb-2">Detected Skills</h5>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-2 py-1 rounded-full bg-background-light text-xs"
                    >React</span
                  >
                  <span
                    class="px-2 py-1 rounded-full bg-background-light text-xs"
                    >TypeScript</span
                  >
                  <span
                    class="px-2 py-1 rounded-full bg-background-light text-xs"
                    >Node.js</span
                  >
                </div>
              </div>
              <div>
                <h5 class="text-sm font-medium mb-2">Experience</h5>
                <div class="space-y-2 text-sm">
                  <p>• 5 years of frontend development experience</p>
                  <p>• Led team of 3 developers</p>
                </div>
              </div>
              <button
                class="w-full px-4 py-2 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent)]/90 transition-colors"
              >
                Confirm Analysis
              </button>
            </div>
          </div>
        </div>
      </div>
    </app-dashboard-layout>
  `,
})
export class CvUploadComponent {}
