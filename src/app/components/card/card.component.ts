import { Component, input } from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-card',
  imports: [FontAwesomeModule, MatTooltipModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  imageUrl = input.required<string>();
  category = input.required<string>();
  title = input.required<string>();

  faCartPlus = faCartPlus;
}


