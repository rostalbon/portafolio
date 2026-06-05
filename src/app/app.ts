import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/footer/footer';
import { Header } from './shared/header/header';
import { Nav } from './shared/nav/nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, Nav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('actividad-angular');
}
