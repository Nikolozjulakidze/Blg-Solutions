import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs from 'emailjs-com';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  sending: boolean = false;

  onFormSubmit(form: NgForm) {
    if (form.valid) {
      this.sending = true; 
      const formData = form.value;
  
      emailjs.send(
        'service_ogxudvm',
        'template_n9b1zlm',
        {
          name: formData.name,
          email: formData.email,
          title: formData.Subject,
          message: formData.message
        },
        'MD8-t5iFjMBWiD4N5'
      ).then(
        (response) => {
          console.log('Email sent successfully!', response.status, response.text);
          alert('Message sent!');
          form.resetForm();
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Something went wrong. Please try again.');
        }
      ).finally(() => {
        this.sending = false;  // Re-enable the button
      });
    }
  }

}
