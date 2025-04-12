import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

export interface SuggestionItem {
  id: string;
  imageUrl: string;
  category: string;
  title: string;
}

@Component({
  selector: 'app-stylist-suggestions',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './stylist-suggestions.component.html',
  styleUrls: ['./stylist-suggestions.component.css'],
})
export class StylistSuggestionsComponent {
  suggestions: SuggestionItem[] = [];
}
