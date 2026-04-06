import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailService } from './services/email.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';


// ?:Custom data type
interface InputFields {
  _username: string;
  _email: string;
  _subject: string;
  _contact: string;
  _message: string;
}

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet,
    CommonModule,
    ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // ?:Default InputFields value
  inputFields: InputFields = {
    _username: '',
    _email: '',
    _subject: '',
    _contact: '',
    _message: '',
  };

  isSending = false;

  constructor(private emailService: EmailService) { }

  // ?:FormGroup Validators
  contactForm = new FormGroup({
    _username: new FormControl(this.inputFields._username, Validators.required),
    _email: new FormControl(this.inputFields._email, [
      Validators.required,
      Validators.pattern(/^[^@]+@[^@]+\.[^@]+$/)
    ]),
    _subject: new FormControl('default', Validators.required),
    _contact: new FormControl(this.inputFields._contact, [
      Validators.required,
      Validators.pattern(/^09\d{9}$/)
    ]),
    _message: new FormControl(this.inputFields._message, Validators.required)
  });


  // ?:Submit contactForm values
  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    alert("Oops! Failed to send your message. Please try again later.")
    console.log(this.contactForm.value)

    // this.isSending = true;

    // const formData = this.contactForm.value;

    // this.emailService.sendEmail({
    //   username: formData._username,
    //   email: formData._email,
    //   subject: formData._subject,
    //   contact: formData._contact,
    //   message: formData._message
    // })
    //   .then(() => {
    //     alert('Message sent!');
    //     this.contactForm.reset({
    //       _username: '',
    //       _email: '',
    //       _subject: 'default',
    //       _contact: '',
    //       _message: '',
    //     });
    //   })
    //   .catch(() => {
    //     alert('Failed to send.');
    //   })
    //   .finally(() => {
    //     this.isSending = false;
    //   });
  }

}
