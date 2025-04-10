import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/ui/button/button.component';

interface FAQ {
  question: string;
  answer: string;
  isOpen?: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  features = [
    {
      title: 'Skill Matching',
      description:
        'Advanced AI-driven matching system to connect talent with opportunities',
      image: '/images/skill-match.jpeg',
    },
    {
      title: 'Career Guidance',
      description:
        'Get personalized career path recommendations and skill development plans',
      image: '/images/career-guidance.jpeg',
    },
    {
      title: 'Real-Time Recruiter Engagement',
      description:
        'Direct communication with recruiters and instant job matching',
      image: '/images/recruiter-engagement.jpeg',
    },
    {
      title: 'Analytics',
      description:
        'Detailed insights and analytics to track your job search progress',
      image: '/images/analytics.jpeg',
    },
  ];

  testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer',
      company: 'TechCorp',
      quote:
        'SkillMatch helped me find my dream job by focusing on my actual skills rather than just my resume.',
    },
    {
      name: 'Mark Davis',
      role: 'HR Manager',
      company: 'InnovateHub',
      quote:
        'The quality of candidates we get through SkillMatch is outstanding. The skill-based matching saves us so much time.',
    },
    {
      name: 'Lisa Chen',
      role: 'UX Designer',
      company: 'DesignLabs',
      quote:
        'The career guidance feature helped me identify and develop the skills I needed to advance in my career.',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Project Manager',
      company: 'AgileWorks',
      quote:
        'SkillMatch revolutionized how we build our teams. The skill-based matching is incredibly accurate.',
    },
    {
      name: 'Emily Barnes',
      role: 'Data Scientist',
      company: 'DataFlow Analytics',
      quote:
        'As someone transitioning careers, SkillMatch made it possible to showcase my transferable skills effectively.',
    },
    {
      name: 'James Wilson',
      role: 'Frontend Developer',
      company: 'WebSolutions',
      quote:
        "The platform's AI-driven recommendations helped me focus on the most relevant opportunities.",
    },
    {
      name: 'Priya Patel',
      role: 'Product Owner',
      company: 'Innovation Labs',
      quote:
        "SkillMatch's analytics helped me understand market demands and adjust my skill development accordingly.",
    },
    {
      name: 'David Kim',
      role: 'DevOps Engineer',
      company: 'CloudTech',
      quote:
        'The real-time engagement feature made the job search process much more efficient and personal.',
    },
  ];

  faqs: FAQ[] = [
    {
      question: 'How does SkillMatch AI work?',
      answer:
        'Our AI algorithm analyzes your skills, experience, and preferences to match you with relevant job opportunities and career paths. It continuously learns and improves based on successful matches.',
      isOpen: false,
    },
    {
      question: 'Is my data secure?',
      answer:
        'Yes, we use industry-standard encryption and security measures to protect your personal information. We comply with all relevant data protection regulations.',
      isOpen: false,
    },
    {
      question: 'How can I contact support?',
      answer:
        'You can reach our support team 24/7 through our help desk portal, email at support@skillmatch.com, or live chat on our platform.',
      isOpen: false,
    },
    {
      question: 'Can I update my skill profile?',
      answer:
        'Yes, you can update your skill profile anytime. We recommend regular updates to ensure the most accurate matches.',
      isOpen: false,
    },
    {
      question: 'What are the benefits for employers?',
      answer:
        'Employers get access to pre-screened candidates matched by skills, reduced time-to-hire, advanced analytics, and integration with existing HR systems.',
      isOpen: false,
    },
  ];

  toggleFaq(faq: FAQ) {
    faq.isOpen = !faq.isOpen;
  }
}
