
import { Component, inject, OnInit } from '@angular/core';
import { ChatMessage, GeminiService } from '../../services/gemini.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { initialPrompt } from '../../constants/initial-prompt';
import { PRODUCTS } from '../../constants/data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { processText } from '../../utils/image-extractor';
import {EventBusService} from '../../services/eventBus.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: ChatMessage[] = [];
  userInput = '';
  isLoading = false;
  geminiService: GeminiService = inject(GeminiService);

  // System prompt for Gemini
  systemPrompt = initialPrompt.concat(JSON.stringify(PRODUCTS));

  constructor(private sanitizer: DomSanitizer, private eventBus: EventBusService) {}

  sanitize(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  ngOnInit() {
    // Send initial message when component loads
    this.sendInitialMessage();
    this.eventBus.on('NEW_MESSAGE')
      .subscribe(data => {
        this.sendMessage(data);
      });
  }



  toggleDimension()
  {
    const element = document.getElementById("chat-container");
    if (!element) return; // ID not found, do nothing
    element.classList.toggle("chat-container--extended");
  }

  sendInitialMessage() {
    this.isLoading = true;

    // First message from the AI
    const initialMessage: ChatMessage = {
      role: 'model',
      parts: [{ text: `Hello, I am your Style assistant, your virtual fashion advisor dedicated to enhancing your elegance. Feel free to consult me for advice.` }]
    };

    // Add initial message to chat (this will be replaced with the actual response)
    this.messages.push(initialMessage);

    // Send empty message to get first response with system prompt
    this.geminiService.generateContent([], this.systemPrompt).subscribe({
      next: (response) => {
        // Replace placeholder with actual response
        if (response.candidates && response.candidates.length > 0) {
          this.messages[0] = {
            role: 'model',
            parts: response.candidates[0].content.parts
          };
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching initial message:', error);
        this.isLoading = false;
      }
    });
  }

  sendMessage(message? : string) {
    if (this.isLoading) {
      return;
    }

    // Add user message to chat
    const userMessage: ChatMessage = {
      role: 'user',
      parts: [{ text: message ?? this.userInput.trim() }]
    };
    this.messages.push(userMessage);

    // Clear input and set loading state
    const userInputCopy = this.userInput;
    this.userInput = '';
    this.isLoading = true;

    // Prepare conversation history
    const conversationHistory = [...this.messages];

    // Get response from Gemini
    this.geminiService.generateContent(conversationHistory, this.systemPrompt).subscribe({
      next: (response) => {

        const { updatedText, images }: { updatedText: string; images: string[] } =
        processText(response.candidates[0].content.parts[0].text);

        const imageTags = images.map((id, index) => {
          return `<div style="margin-right: 15px; margin-y:20px; display:block"><img src="../../../../images/products/${id}" width="100px" height="auto" alt="Image ${index + 1}"></div>`;
        });

        const finalText = updatedText.replace(/%\*_([0-9]+)%\*_/g, (match, numberStr) => {
          const index = parseInt(numberStr, 10);
          return index >= 0 && index < imageTags.length ? imageTags[index] : "";
        });

        response.candidates[0].content.parts[0].text = finalText;

        if (response.candidates && response.candidates.length > 0) {
          const aiResponse: ChatMessage = {
            role: 'model',
            parts: response.candidates[0].content.parts
          };
          this.messages.push(aiResponse);
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error sending message:', error);
        this.isLoading = false;
        // Handle error - maybe add back the user input
        this.userInput = userInputCopy;
      }
    });
  }
}
