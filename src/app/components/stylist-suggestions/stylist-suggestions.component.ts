import {Component, Injectable} from '@angular/core';
import {CardComponent} from '../card/card.component';
import {PersonalStylist} from '../../shared/ai/PersonalStylist';

export class SuggestionsList {
  suggestions: SuggestionItem[];

  constructor(suggestions: SuggestionItem[]) {
    this.suggestions = suggestions;
  }
}

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
  suggestions: SuggestionsList = new SuggestionsList([]);

  constructor(
    stylist: PersonalStylist
  ) {
    stylist.subscribeToSuggestionUpdates(this.updateSuggestions);
  }

  private updateSuggestions(list: SuggestionsList) {
    this.suggestions = list;
  }
}
