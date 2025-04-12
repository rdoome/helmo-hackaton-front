import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AiSidebarComponent } from './components/ai-sidebar/ai-sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AiSidebarComponent],
  template: `<router-outlet></router-outlet><ai-sidebar></ai-sidebar>`,
})
export class AppComponent {}
