
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isDropdownOpen = false;
  isMasalebiDropdownOpen = false;
  
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    this.isMasalebiDropdownOpen = false;
  }
  
  toggleMasalebiDropdown(event: Event) {
    event.stopPropagation();
    this.isMasalebiDropdownOpen = !this.isMasalebiDropdownOpen;
  }
  
  closeDropdown() {
    this.isDropdownOpen = false;
    this.isMasalebiDropdownOpen = false;
  }
  
}
