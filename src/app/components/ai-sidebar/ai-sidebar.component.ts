import { Component } from '@angular/core';

@Component({
  selector: 'ai-sidebar',
  imports: [],
  templateUrl: './ai-sidebar.component.html',
  styleUrl: './ai-sidebar.component.css'
})
export class AiSidebarComponent {
  handleSubmit(e: Event) {
    e.preventDefault();

    const $input = <HTMLInputElement>document.querySelector("#prompt");
    if (!$input) return;
    const prompt = $input.value;
    $input.value = "";
  }
}
