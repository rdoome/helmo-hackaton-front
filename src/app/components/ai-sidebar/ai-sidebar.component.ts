import {Component, ElementRef} from '@angular/core';
import {PersonalStylist} from '../../shared/ai/PersonalStylist';

@Component({
  selector: 'ai-sidebar',
  imports: [],
  templateUrl: './ai-sidebar.component.html',
  styleUrl: './ai-sidebar.component.css'
})
export class AiSidebarComponent {
  private readonly _stylist;

  constructor(private elRef:ElementRef, stylist: PersonalStylist) {
    stylist.subscribeToMessages(this.addMessage);
    this._stylist = stylist;
  }

  submitPrompt() {
    const $input = <HTMLInputElement>this.elRef.nativeElement.querySelector("#prompt");
    if (!$input) return;
    const prompt = $input.innerText;
    $input.innerText = "";
    this.addMessage(prompt);
    this._stylist.respondToUserMessage(prompt);
  }

  keyDown($event: KeyboardEvent) {
    if ($event.key == "Enter") this.submitPrompt();
  }

  addMessage(message: string) {
    this.elRef.nativeElement.querySelector("ul").insertAdjacentHTML('beforeend', `<p>${message}</p>`);
  }
}
