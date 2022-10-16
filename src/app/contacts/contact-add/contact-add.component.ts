import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss']
})
export class ContactAddComponent implements OnInit {

  contactForm: FormGroup = new FormGroup({});

  constructor(private contactsService: ContactsService, private router: Router) { }

  ngOnInit(): void {
    this.buildContactForm();
  }

  private buildContactForm() {

    const surnamePattern: string | RegExp = '^[A-ż]{3,20}$';
    const firstNamePattern: string | RegExp = '^[A-ż]{3,20}$';
    const phoneNumberPattern: string | RegExp = '^[0-9]{9}$';

    this.contactForm = new FormGroup({
      
      surname: new FormControl('', [Validators.required, Validators.pattern(surnamePattern)]), // pierwszy argument to value inputa, drugi to mogą być walidatory
      firstName: new FormControl('', [Validators.required, Validators.pattern(firstNamePattern)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(phoneNumberPattern)])

    })

  }

  addContact(): void {

    this.contactsService.addContact(this.contactForm.value).subscribe(() => this.router.navigate(['/contacts']));

  }

}
