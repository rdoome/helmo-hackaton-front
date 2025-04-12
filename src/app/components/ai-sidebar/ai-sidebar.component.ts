import {Component, ElementRef} from '@angular/core';

@Component({
  selector: 'ai-sidebar',
  imports: [],
  templateUrl: './ai-sidebar.component.html',
  styleUrl: './ai-sidebar.component.css'
})
export class AiSidebarComponent {

  constructor(private elRef:ElementRef) {}

  submitPrompt() {
    const $input = <HTMLInputElement>this.elRef.nativeElement.querySelector("#prompt");
    if (!$input) return;
    const prompt = $input.innerText;
    $input.innerText = "";
    this.addMessage(prompt);
  }

  keyDown($event: KeyboardEvent) {
    if ($event.key == "Enter") this.submitPrompt();
  }

  addMessage(message: string) {
    this.elRef.nativeElement.querySelector("ul").insertAdjacentHTML('beforeend', `<p>${message}</p>`);
  }
}
