import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  imports: [ButtonModule, TranslateModule],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent implements OnInit {

  menuOpen = false;
  currentLang = 'en';

  constructor(private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.initLanguage();
  }

  private initLanguage(): void {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('en');
    const savedLang = localStorage.getItem('lang') as 'en' | 'es' | null;
    const browserLang = this.translate.getBrowserLang() as 'en' | 'es' | undefined;
    this.currentLang = savedLang ?? (browserLang === 'es' ? 'es' : 'en');
    this.translate.use(this.currentLang);
  }

  switchLang(): void {
    this.currentLang = this.currentLang === 'en' ? 'es' : 'en';
    this.translate.use(this.currentLang);
    localStorage.setItem('lang', this.currentLang);
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }


}
