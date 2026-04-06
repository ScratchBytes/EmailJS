import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  sendEmail(data: any) {
    return emailjs.send(
      environment.emailjs.serviceID,
      environment.emailjs.templateID,
      data,
      environment.emailjs.publicKey
    );
  }
}
