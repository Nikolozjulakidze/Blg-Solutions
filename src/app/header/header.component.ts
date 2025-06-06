// src/app/header/header.component.ts
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

lang:string = '';

constructor(private translate: TranslateService) {

}

ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
}

ChangeLang(lang:any) {
  const selectedLang = lang.target.value;

  localStorage.setItem('lang', selectedLang);

  this.translate.use(selectedLang);
}

  isMenuOpen = false;
  isDropdownOpen = false;


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }


}
