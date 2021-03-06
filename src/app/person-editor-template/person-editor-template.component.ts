import { Component } from '@angular/core';
import { Person } from '../models/Person';
import { FRIENDS } from '../data/friends';
import { ModalService } from '../services/modal.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-person-editor-template',
  templateUrl: './person-editor-template.component.html',
  styleUrls: ['./person-editor-template.component.css']
})
export class PersonEditorTemplateComponent {
  person: Person = new Person(this.getNextId(), '', '');

  constructor(private modal: ModalService) {}

  // Returns the next id in FRIENDS array to be used for adding a new friend
  getNextId(): number {
    return FRIENDS.length + 1;
  }

  onSubmit(form: NgForm) {
    // Add new friend from form submission
    FRIENDS.push(this.person);

    // Alert user of successful form submission
    this.modal.setMessage(`You successfully added ${this.person.firstName} ${this.person.lastName} to the list.`);

    // Reset form model and form - include next friend id
    this.person = new Person(this.getNextId(), '', '');
    form.resetForm(this.person);
  }

}
