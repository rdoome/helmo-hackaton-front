import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  imageUrl = input.required<string>();
  category = input.required<string>();
  title = input.required<string>();
}


