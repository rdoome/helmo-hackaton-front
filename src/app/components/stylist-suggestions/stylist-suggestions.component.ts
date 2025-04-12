import { Component } from '@angular/core';



@Component({
  selector: 'app-stylist-suggestions',
  imports: [],
  templateUrl: './stylist-suggestions.component.html',
  styleUrl: './stylist-suggestions.component.css'
})
export class StylistSuggestionsComponent {
  items = [
    { name: "A" },
    { name: "B" }
  ]
}
