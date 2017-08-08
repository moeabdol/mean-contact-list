import { Component, OnInit } from "@angular/core";

import { ContactsService } from "./contacts.service";
import { Contact } from "./contact";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"],
  providers: [ContactsService]
})
export class ContactsComponent implements OnInit {
  contacts:   Contact[];
  contact:    Contact;
  firstName:  string;
  lastName:   string;
  phone:      string;

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.contactsService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
  }

  addContact() {
    const newContact = {
      firstName:  this.firstName,
      lastName:   this.lastName,
      phone:      this.phone
    };
    this.contactsService.addContact(newContact)
      .subscribe(contact => this.contacts.push(contact));
  }

  deleteContact(id: any) {
    this.contactsService.deleteContact(id)
      .subscribe(data => {
        if (data.n === 1) {
          for (let i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i]._id === id) {
              this.contacts.splice(i, 1);
            }
          }
        }
      });
  }
}
