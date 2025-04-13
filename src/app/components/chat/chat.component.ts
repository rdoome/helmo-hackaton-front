
import { Component, inject, OnInit } from '@angular/core';
import { ChatMessage, GeminiService } from '../../services/gemini.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { initialPrompt } from '../../constants/initial-prompt';
import { data } from '../../constants/data';

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
  systemPrompt = initialPrompt.concat(data);

  ngOnInit() {
    // Send initial message when component loads
    this.sendInitialMessage();
  }

  sendInitialMessage() {
    this.isLoading = true;
    
    // First message from the AI
    const initialMessage: ChatMessage = {
      role: 'model',
      parts: [{ text: 'Hello! How can I help you today?' }]
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

  sendMessage() {
    if (!this.userInput.trim() || this.isLoading) {
      return;
    }

    // Add user message to chat
    const userMessage: ChatMessage = {
      role: 'user',
      parts: [{ text: this.userInput }]
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
