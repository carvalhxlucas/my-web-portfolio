import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Projects } from './projects/projects';
import { ExperienceComponent } from './experience/experience';
import { Skills } from './skills/skills';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Hero,
    About,
    Projects,
    ExperienceComponent,
    Skills,
    Contact
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}