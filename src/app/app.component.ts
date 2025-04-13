import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/page_sections/header/header.component";
import { ChatComponent } from "./components/chat/chat.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ChatComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
