import { Component, OnInit } from '@angular/core';
import { ContactModel } from 'src/app/models/contact-model';
import { ContactsService } from '../contacts.service';
// import { CONTACTS } from 'src/app/data/contacts-data';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {


  contacts: ContactModel[] = [];

  
  constructor(private contactsService: ContactsService) { }
  
  ngOnInit(): void {
    this.loadContacts();
  }


  hideContacts(): void { // metoda -> jak w klasach

    this.contacts = [];

  }

  showContacts(): void {

    // this.contacts = CONTACTS;
    
  }

  loadContacts(): void {

    this.contactsService.getContacts().subscribe(data => this.contacts = data);
    

  }


}
