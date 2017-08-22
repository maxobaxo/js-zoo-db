import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Animal } from './../animal.model';

@Component({
  selector: 'add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {
  @Output() addAnimalSender = new EventEmitter();

  addAnimal = false;

  addNewAnimal() {
    this.addAnimal = true;
  }

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakersNeeded: number, sex: string, like: string, dislike: string) {
    var newAnimalToAdd = new Animal(species, name, age, diet, location, caretakersNeeded, sex, like, dislike);
    this.addAnimalSender.emit(newAnimalToAdd);
    this.addAnimal = false;
  }

  cancelForm() {
    this.addAnimal = false;
  }

  ngOnInit() {
  }

}
