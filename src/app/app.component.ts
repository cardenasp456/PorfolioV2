import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { HomepageHeaderComponent } from './components/homepage-header/homepage-header.component';

@Component({
  selector: 'app-root',
  imports: [AppHeaderComponent, HomepageHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  title = 'porfolio';
}
