import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('geo');
    this.translate.use(localStorage.getItem('lang') || 'geo');
  } 

  title = 'ITstepPROJECT';
}

