import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'ITstepPROJECT';

  constructor(
    private translate: TranslateService,
    private router: Router
  ) {
    this.translate.setDefaultLang('geo');
    this.translate.use(localStorage.getItem('lang') || 'geo');
  }

  ngOnInit(): void {
    // Scroll to top on every route change
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
}
