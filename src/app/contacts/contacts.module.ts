import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactsListComponent,
    ContactDetailsComponent,
    ContactAddComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContactsRoutingModule,
    ReactiveFormsModule // moduł odpowiedzialny za wysyłkę formularzy
  ],
  exports: [
    ContactsListComponent
  ]
})
export class ContactsModule { }
