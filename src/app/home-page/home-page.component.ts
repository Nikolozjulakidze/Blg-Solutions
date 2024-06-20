import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(private router: Router) { }

  goToProductsPage() {
    this.router.navigate(['/products']); 
  }

  goToAboutPage(){
    this.router.navigate(['/about']);
  }
  onFormSubmit(form:NgForm){
    console.log(form)
    console.log(form.value)
    
   
    let register = document.getElementById('easy');
    if (register) {
      register.style.display = 'none';
    }
}


}
