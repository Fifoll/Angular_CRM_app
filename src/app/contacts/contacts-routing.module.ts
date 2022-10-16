import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

const routes: Routes = [
  {path: 'contact/:id', component: ContactDetailsComponent}, // :id --> parametr, który może się zmieniać
  {path: 'contact-add', component: ContactAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
