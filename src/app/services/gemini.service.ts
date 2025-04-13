
import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ChatMessage {
  role: 'user' | 'model' | 'system';
  parts: { text: string }[];
}

export interface GeminiRequest {
  contents: ChatMessage[];
  systemInstruction?: {
    parts: { text: string }[];
  };
}

export interface GeminiResponse {
  candidates: {
    content: {
      role: string;
      parts: { text: string }[];
    };
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private apiUrl = 'https://generativelanguage.googleapis.com/v1beta';
  private apiKey = 'AIzaSyB1RUSyJ6W6h_8-y4d42ABwRWMnth2H-fI'
  private model = 'gemini-2.0-flash'; // Update to the model you want to use
  private http: HttpClient = inject(HttpClient);

  generateContent(messages: ChatMessage[], systemPrompt?: string): Observable<GeminiResponse> {
    const url = `${this.apiUrl}/models/${this.model}:generateContent?key=${this.apiKey}`;
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const requestBody: GeminiRequest = {
      contents: messages
    };

    // Add system instruction if provided
    if (systemPrompt) {
      requestBody.systemInstruction = {
        parts: [{ text: systemPrompt }]
      };
    }

    return this.http.post<GeminiResponse>(url, requestBody, { headers });
  }
}
