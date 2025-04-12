import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from '../dashboard-layout/dashboard-layout.component';

@Component({
  selector: 'app-career-guidance',
  standalone: true,
  imports: [CommonModule, DashboardLayoutComponent],
  template: `
    <app-dashboard-layout>
      <div class="max-w-7xl mx-auto p-6">
        <h2 class="text-2xl font-semibold mb-6">Career Development</h2>

        <!-- Career Path Timeline -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="lg:col-span-2">
            <div
              class="p-6 rounded-xl bg-background-light/30 border border-foreground-light/20"
            >
              <h3 class="text-lg font-medium mb-6">Your Career Path</h3>

              <div class="relative">
                <div
                  class="absolute left-4 top-0 bottom-0 w-0.5 bg-background-light"
                ></div>
                <div class="space-y-8">
                  <!-- Current Position -->
                  <div class="flex items-start gap-4">
                    <div
                      class="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-background"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div class="flex-1 bg-background-light/50 rounded-lg p-4">
                      <h4 class="font-medium mb-2">
                        Current: Senior Frontend Developer
                      </h4>
                      <div class="space-y-2">
                        <p class="text-sm text-foreground-light">
                          Mastered Skills:
                        </p>
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
                    </div>
                  </div>

                  <!-- Next Career Step -->
                  <div class="flex items-start gap-4">
                    <div
                      class="w-8 h-8 rounded-full bg-background-light/50 border border-[var(--color-accent)] flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4 text-[var(--color-accent)]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                    <div class="flex-1 bg-background-light/50 rounded-lg p-4">
                      <h4 class="font-medium mb-2">
                        Next: Lead Frontend Developer
                      </h4>
                      <div class="space-y-4">
                        <div>
                          <p class="text-sm text-foreground-light mb-2">
                            Required Skills:
                          </p>
                          <div class="flex flex-wrap gap-2">
                            <span
                              class="px-2 py-1 rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] text-xs"
                              >Team Leadership</span
                            >
                            <span
                              class="px-2 py-1 rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] text-xs"
                              >System Design</span
                            >
                            <span
                              class="px-2 py-1 rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] text-xs"
                              >Architecture</span
                            >
                          </div>
                        </div>
                        <div class="flex gap-2">
                          <button
                            class="px-3 py-1 text-sm rounded-lg bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent)]/90"
                          >
                            Find Learning Resources
                          </button>
                          <button
                            class="px-3 py-1 text-sm rounded-lg border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10"
                          >
                            Connect with Mentors
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Future Position -->
                  <div class="flex items-start gap-4">
                    <div
                      class="w-8 h-8 rounded-full bg-background-light/50 flex items-center justify-center text-foreground-light"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                    </div>
                    <div class="flex-1 bg-background-light/50 rounded-lg p-4">
                      <h4 class="font-medium mb-2">
                        Future: Technical Director
                      </h4>
                      <p class="text-sm text-foreground-light">
                        Focus on technical strategy and team growth
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Skills Development -->
          <div class="space-y-6">
            <!-- Current Skills -->
            <div
              class="p-6 rounded-xl bg-background-light/30 border border-foreground-light/20"
            >
              <h3 class="text-lg font-medium mb-4">Skills Progress</h3>
              <div class="space-y-4">
                <div>
                  <div class="flex justify-between text-sm mb-1">
                    <span>React</span>
                    <span>Advanced</span>
                  </div>
                  <div
                    class="h-2 bg-background-light rounded-full overflow-hidden"
                  >
                    <div class="h-full w-[85%] bg-[var(--color-accent)]"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between text-sm mb-1">
                    <span>Team Leadership</span>
                    <span>Intermediate</span>
                  </div>
                  <div
                    class="h-2 bg-background-light rounded-full overflow-hidden"
                  >
                    <div class="h-full w-[60%] bg-[var(--color-accent)]"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between text-sm mb-1">
                    <span>System Design</span>
                    <span>Beginner</span>
                  </div>
                  <div
                    class="h-2 bg-background-light rounded-full overflow-hidden"
                  >
                    <div class="h-full w-[30%] bg-[var(--color-accent)]"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Learning Resources -->
            <div
              class="p-6 rounded-xl bg-background-light/30 border border-foreground-light/20"
            >
              <h3 class="text-lg font-medium mb-4">Recommended Learning</h3>
              <div class="space-y-4">
                <div
                  class="p-4 rounded-lg bg-background-light/50 hover:border-[var(--color-accent)] border border-transparent transition-colors cursor-pointer"
                >
                  <h4 class="font-medium mb-1">System Design Fundamentals</h4>
                  <p class="text-sm text-foreground-light mb-2">
                    Learn the basics of system architecture and design patterns
                  </p>
                  <div class="flex items-center gap-2 text-xs">
                    <span
                      class="px-2 py-1 rounded-full bg-green-500/20 text-green-500"
                      >Beginner Friendly</span
                    >
                    <span>8 weeks</span>
                  </div>
                </div>

                <div
                  class="p-4 rounded-lg bg-background-light/50 hover:border-[var(--color-accent)] border border-transparent transition-colors cursor-pointer"
                >
                  <h4 class="font-medium mb-1">Team Leadership Workshop</h4>
                  <p class="text-sm text-foreground-light mb-2">
                    Essential skills for leading development teams
                  </p>
                  <div class="flex items-center gap-2 text-xs">
                    <span
                      class="px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-500"
                      >Intermediate</span
                    >
                    <span>4 weeks</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Industry Insights -->
            <div
              class="p-6 rounded-xl bg-background-light/30 border border-foreground-light/20"
            >
              <h3 class="text-lg font-medium mb-4">Market Insights</h3>
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span class="text-sm">Lead Developer Demand</span>
                  <span class="text-sm text-green-500">↑ 15%</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm">Avg. Salary Range</span>
                  <span class="text-sm">$130k - $180k</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm">Required Experience</span>
                  <span class="text-sm">5-7 years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </app-dashboard-layout>
  `,
})
export class CareerGuidanceComponent {}
