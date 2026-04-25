import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBar } from './components/menu-bar/menu-bar';
import { MenuTitle } from './components/menu-title/menu-title';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuBar],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('angular-blog');
}
