import { Component, OnInit, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  lang: string = '';
  isMenuOpen = false;
  isDropdownOpen = false;
  isLangOpen = false;
  selectedFlag = 'assets/Flags/Georgia.jpg';

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
  }

  ChangeLang(lang: any) {
    this.lang = lang;
    this.translate.use(lang);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  toggleLangDropdown() {
    this.isLangOpen = !this.isLangOpen;
  }

  selectFlag(lang: string) {
    this.isLangOpen = false;
    if (lang === 'geo') this.selectedFlag = 'assets/Flags/Georgia.jpg';
    else if (lang === 'eng') this.selectedFlag = 'assets/Flags/English.png';
    else if (lang === 'rus') this.selectedFlag = 'assets/Flags/Russian.png';
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.isDropdownOpen = false;
    this.isLangOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const dropdownElement = document.querySelector('.dropdown');
    const langDropdownElement = document.querySelector('.custom-select-container');

    if (dropdownElement && !dropdownElement.contains(target)) {
      this.isDropdownOpen = false;
    }

    if (langDropdownElement && !langDropdownElement.contains(target)) {
      this.isLangOpen = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth > 768) {
      this.isMenuOpen = false;
    }
  }
}
