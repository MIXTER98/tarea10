import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderMod } from './header-mod/header-mod';
import { BodyMod } from './body-mod/body-mod';
import { FooterMod } from './footer-mod/footer-mod';

@Component({
  imports: [RouterOutlet, HeaderMod, BodyMod, FooterMod],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('tarea10');
}
