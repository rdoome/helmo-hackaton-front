import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AiSidebarComponent } from './components/ai-sidebar/ai-sidebar.component';
import { HeaderComponent } from "./components/page_sections/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AiSidebarComponent, HeaderComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
