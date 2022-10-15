import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ContactsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ContactsListComponent
  ]
})
export class ContactsModule { }
