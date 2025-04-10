import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Contact {
  id: number;
  name: string;
  role: string;
  avatar: string;
  lastMessage: string;
  lastMessageTime: string;
  messages: Message[];
}

interface Message {
  id: number;
  text: string;
  time: string;
  sent: boolean;
}

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="grid grid-cols-[320px_1fr] h-[calc(100vh-64px)]">
      <div class="border-r border-foreground-light/20 flex flex-col">
        <div class="p-4 border-b border-foreground-light/20">
          <input
            type="text"
            placeholder="Search messages..."
            class="w-full px-4 py-2 rounded-lg border border-foreground-light/20 bg-background-light"
          />
        </div>
        <nav class="overflow-y-auto flex-1 divide-y divide-foreground-light/20">
          @for (contact of contacts; track contact.id) {
            <div
              role="button"
              tabindex="0"
              (click)="selectContact(contact)"
              (keydown.enter)="selectContact(contact)"
              class="w-full p-4 text-left hover:bg-background-light/50 cursor-pointer"
              [class.bg-background-light]="selectedContact?.id === contact.id"
            >
              <div class="flex gap-3">
                <img
                  [src]="contact.avatar"
                  [alt]="contact.name"
                  class="w-10 h-10 rounded-full object-cover shrink-0"
                />
                <div class="min-w-0 flex-1">
                  <div class="flex justify-between items-baseline">
                    <h3 class="font-medium truncate">{{contact.name}}</h3>
                    <span class="text-xs text-foreground-light shrink-0">{{contact.lastMessageTime}}</span>
                  </div>
                  <p class="text-sm text-foreground-light truncate">{{contact.lastMessage}}</p>
                </div>
              </div>
            </div>
          }
        </nav>
      </div>

      <div class="flex flex-col">
        @if (selectedContact) {
          <header class="p-4 border-b border-foreground-light/20">
            <div class="flex gap-3">
              <img
                [src]="selectedContact.avatar"
                [alt]="selectedContact.name"
                class="w-10 h-10 rounded-full object-cover shrink-0"
              />
              <div>
                <h2 class="font-medium">{{selectedContact.name}}</h2>
                <span class="text-sm text-foreground-light">{{selectedContact.role}}</span>
              </div>
            </div>
          </header>

          <main class="flex-1 overflow-y-auto p-4 space-y-4">
            @for (message of selectedContact.messages; track message.id) {
              <div class="flex" [class.justify-end]="message.sent">
                <div
                  class="max-w-[70%] rounded-lg px-4 py-2"
                  [class.bg-[var(--color-accent)]!text-white]="message.sent"
                  [class.bg-background-light]="!message.sent"
                >
                  <p>{{message.text}}</p>
                  <span class="text-xs opacity-70">{{message.time}}</span>
                </div>
              </div>
            }
          </main>

          <footer class="p-4 border-t border-foreground-light/20">
            <form (ngSubmit)="sendMessage()" class="flex gap-2">
              <input
                type="text"
                name="message"
                [(ngModel)]="newMessage"
                placeholder="Type a message..."
                class="flex-1 px-4 py-2 rounded-lg border border-foreground-light/20 bg-background-light"
              />
              <button
                type="submit"
                class="px-4 py-2 rounded-lg bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent)]/90"
              >
                Send
              </button>
            </form>
          </footer>
        } @else {
          <div class="flex-1 flex items-center justify-center text-foreground-light">
            Select a conversation to start messaging
          </div>
        }
      </div>
    </div>
  `,
})
export class MessagesComponent {
  contacts: Contact[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'HR Manager at TechCorp',
      avatar: '/images/profile-placeholder.jpeg',
      lastMessage: 'Looking forward to our interview tomorrow!',
      lastMessageTime: '10:30 AM',
      messages: [
        {
          id: 1,
          text: 'Hi! We were impressed with your application.',
          time: '10:15 AM',
          sent: false,
        },
        {
          id: 2,
          text: "Thank you! I'm excited about the opportunity.",
          time: '10:20 AM',
          sent: true,
        },
        {
          id: 3,
          text: 'Looking forward to our interview tomorrow!',
          time: '10:30 AM',
          sent: false,
        },
      ],
    },
    {
      id: 2,
      name: 'Mike Wilson',
      role: 'Tech Lead at InnovateSoft',
      avatar: '/images/profile-placeholder.jpeg',
      lastMessage: 'Could you share some examples of your work?',
      lastMessageTime: 'Yesterday',
      messages: [
        {
          id: 1,
          text: "Hello! I'd like to discuss your application.",
          time: 'Yesterday',
          sent: false,
        },
      ],
    },
  ];

  selectedContact: Contact | null = null;
  newMessage = '';

  selectContact(contact: Contact) {
    this.selectedContact = contact;
  }

  sendMessage() {
    if (this.newMessage.trim() && this.selectedContact) {
      this.selectedContact.messages.push({
        id: this.selectedContact.messages.length + 1,
        text: this.newMessage,
        time: 'Just now',
        sent: true,
      });
      this.selectedContact.lastMessage = this.newMessage;
      this.selectedContact.lastMessageTime = 'Just now';
      this.newMessage = '';
    }
  }
}
