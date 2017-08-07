import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";

import { Contact } from "./contact";

@Injectable()
export class ContactsService {
  constructor(private http: Http) { }

  getContacts() {
    return this.http.get("http://localhost:3000/api/contacts")
      .map(res => res.json());
  }

  addContact(contact) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post("http://localhost:3000/api/contacts", contact,
      { headers })
      .map(res => res.json());
  }

  deleteContact(id) {
    return this.http.delete("http://localhost:3000/api/contacts/" + id)
      .map(res => res.json());
  }
}
