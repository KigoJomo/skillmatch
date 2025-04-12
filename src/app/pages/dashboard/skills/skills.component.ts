import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from '../dashboard-layout/dashboard-layout.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, DashboardLayoutComponent],
  template: `
    <app-dashboard-layout>
      <div class="max-w-7xl mx-auto p-6">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-semibold">Skills Management</h2>
          <button
            class="px-4 py-2 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent)]/90"
          >
            Add New Skill
          </button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Skills Categories -->
          <div class="lg:col-span-2 space-y-6">
            <!-- Technical Skills -->
            <div
              class="p-6 rounded-xl bg-background-light/30 border border-foreground-light/20"
            >
              <h3 class="text-lg font-medium mb-4">Technical Skills</h3>
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <div class="flex-1 mr-4">
                    <div class="flex justify-between mb-1">
                      <span class="text-sm font-medium">React</span>
                      <span class="text-sm text-foreground-light"
                        >Advanced</span
                      >
                    </div>
                    <div
                      class="h-2 bg-background-light rounded-full overflow-hidden"
                    >
                      <div
                        class="h-full w-[90%] bg-[var(--color-accent)]"
                      ></div>
                    </div>
                  </div>
                  <button
                    class="text-[var(--color-accent)] hover:text-[var(--color-accent)]/80"
                  >
                    Edit
                  </button>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex-1 mr-4">
                    <div class="flex justify-between mb-1">
                      <span class="text-sm font-medium">TypeScript</span>
                      <span class="text-sm text-foreground-light"
                        >Advanced</span
                      >
                    </div>
                    <div
                      class="h-2 bg-background-light rounded-full overflow-hidden"
                    >
                      <div
                        class="h-full w-[85%] bg-[var(--color-accent)]"
                      ></div>
                    </div>
                  </div>
                  <button
                    class="text-[var(--color-accent)] hover:text-[var(--color-accent)]/80"
                  >
                    Edit
                  </button>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex-1 mr-4">
                    <div class="flex justify-between mb-1">
                      <span class="text-sm font-medium">Node.js</span>
                      <span class="text-sm text-foreground-light"
                        >Intermediate</span
                      >
                    </div>
                    <div
                      class="h-2 bg-background-light rounded-full overflow-hidden"
                    >
                      <div
                        class="h-full w-[65%] bg-[var(--color-accent)]"
                      ></div>
                    </div>
                  </div>
                  <button
                    class="text-[var(--color-accent)] hover:text-[var(--color-accent)]/80"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>

            <!-- Soft Skills -->
            <div
              class="p-6 rounded-xl bg-background-light/30 border border-foreground-light/20"
            >
              <h3 class="text-lg font-medium mb-4">Soft Skills</h3>
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <div class="flex-1 mr-4">
                    <div class="flex justify-between mb-1">
                      <span class="text-sm font-medium">Team Leadership</span>
                      <span class="text-sm text-foreground-light"
                        >Intermediate</span
                      >
                    </div>
                    <div
                      class="h-2 bg-background-light rounded-full overflow-hidden"
                    >
                      <div
                        class="h-full w-[60%] bg-[var(--color-accent)]"
                      ></div>
                    </div>
                  </div>
                  <button
                    class="text-[var(--color-accent)] hover:text-[var(--color-accent)]/80"
                  >
                    Edit
                  </button>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex-1 mr-4">
                    <div class="flex justify-between mb-1">
                      <span class="text-sm font-medium">Communication</span>
                      <span class="text-sm text-foreground-light"
                        >Advanced</span
                      >
                    </div>
                    <div
                      class="h-2 bg-background-light rounded-full overflow-hidden"
                    >
                      <div
                        class="h-full w-[80%] bg-[var(--color-accent)]"
                      ></div>
                    </div>
                  </div>
                  <button
                    class="text-[var(--color-accent)] hover:text-[var(--color-accent)]/80"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>

            <!-- Certifications -->
            <div
              class="p-6 rounded-xl bg-background-light/30 border border-foreground-light/20"
            >
              <h3 class="text-lg font-medium mb-4">
                Certifications & Achievements
              </h3>
              <div class="space-y-4">
                <div
                  class="flex items-center justify-between p-4 bg-background-light/50 rounded-lg"
                >
                  <div>
                    <h4 class="font-medium">AWS Certified Developer</h4>
                    <p class="text-sm text-foreground-light">
                      Issued: Jan 2024 • Expires: Jan 2027
                    </p>
                  </div>
                  <button
                    class="text-[var(--color-accent)] hover:text-[var(--color-accent)]/80"
                  >
                    View
                  </button>
                </div>
                <div
                  class="flex items-center justify-between p-4 bg-background-light/50 rounded-lg"
                >
                  <div>
                    <h4 class="font-medium">React Advanced Concepts</h4>
                    <p class="text-sm text-foreground-light">
                      Completed: March 2024
                    </p>
                  </div>
                  <button
                    class="text-[var(--color-accent)] hover:text-[var(--color-accent)]/80"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Skills Insights -->
          <div class="space-y-6">
            <!-- Market Demand -->
            <div
              class="p-6 rounded-xl bg-background-light/30 border border-foreground-light/20"
            >
              <h3 class="text-lg font-medium mb-4">Skills in Demand</h3>
              <div class="space-y-3">
                <div class="flex justify-between items-center">
                  <span class="text-sm">React</span>
                  <span class="text-sm text-green-500">High Demand</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm">TypeScript</span>
                  <span class="text-sm text-green-500">High Demand</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm">Node.js</span>
                  <span class="text-sm text-yellow-500">Medium Demand</span>
                </div>
              </div>
            </div>

            <!-- Skill Recommendations -->
            <div
              class="p-6 rounded-xl bg-background-light/30 border border-foreground-light/20"
            >
              <h3 class="text-lg font-medium mb-4">Recommended Skills</h3>
              <div class="space-y-4">
                <div class="p-4 rounded-lg bg-background-light/50">
                  <h4 class="font-medium mb-1">Next.js</h4>
                  <p class="text-sm text-foreground-light mb-2">
                    Popular React framework with growing demand
                  </p>
                  <button
                    class="text-sm text-[var(--color-accent)] hover:text-[var(--color-accent)]/80"
                  >
                    Start Learning →
                  </button>
                </div>
                <div class="p-4 rounded-lg bg-background-light/50">
                  <h4 class="font-medium mb-1">GraphQL</h4>
                  <p class="text-sm text-foreground-light mb-2">
                    Modern API query language
                  </p>
                  <button
                    class="text-sm text-[var(--color-accent)] hover:text-[var(--color-accent)]/80"
                  >
                    Start Learning →
                  </button>
                </div>
              </div>
            </div>

            <!-- Learning Progress -->
            <div
              class="p-6 rounded-xl bg-background-light/30 border border-foreground-light/20"
            >
              <h3 class="text-lg font-medium mb-4">Learning Progress</h3>
              <div class="space-y-4">
                <div>
                  <div class="flex justify-between text-sm mb-1">
                    <span>System Design</span>
                    <span>60% Complete</span>
                  </div>
                  <div
                    class="h-2 bg-background-light rounded-full overflow-hidden"
                  >
                    <div class="h-full w-[60%] bg-[var(--color-accent)]"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between text-sm mb-1">
                    <span>AWS Services</span>
                    <span>40% Complete</span>
                  </div>
                  <div
                    class="h-2 bg-background-light rounded-full overflow-hidden"
                  >
                    <div class="h-full w-[40%] bg-[var(--color-accent)]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </app-dashboard-layout>
  `,
})
export class SkillsComponent {}
