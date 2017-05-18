import { Component } from '@angular/core';
import {GithubServices} from './services/github.service';

@Component({
  selector: 'app-root',
  template: `<profile></profile>`
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
