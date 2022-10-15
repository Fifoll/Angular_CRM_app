import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  
  contactDetails: any = {};

  constructor(private contactsService: ContactsService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.loadContact();
  }

  loadContact(): void {

    const id = this.route.snapshot.params['id']; // route pobiera z linku dane w tym przypadku id np. /contact/2

    this.contactsService.getContact(id).subscribe(data => {
      this.contactDetails = data[0];
    })

  }

}
