import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  imports: [NgIf],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  fname="";
  lname="";
  email="";
  name: string = '';


  // Called when typing in first input
  getName(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.name = inputElement.value;
  }

  // Called when clicking "Add Name" button
  setName(value: string) {
    this.fname = value;
  }
}
