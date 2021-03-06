import { Component, Input } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wayward Pines Zoo: Animal Database';
  masterAnimalList: Animal[] = [
    new Animal('Lemur', 'JoJo', 5, 'Fruits & Veggies', 'Ape Terrarium', 1, 'F', 'Bananas', 'The Color Red'),
    new Animal('Otter', 'Torrey', 2, 'Sea Urchin and Herring', 'Open Ocean Exhibit', 2, 'F', 'Burping', 'Tom from the Nocturnal Building'),
    new Animal('Flamingo', 'Rick', 1, 'Algae & Brine Shrimp', 'Tropical Area', 1, 'M', 'Sleeping', 'Being Startled')
  ]

  selectedAnimal = null;
  addAnimal = false;

  showAddAnimalForm() {
    this.addAnimal = true;
    this.selectedAnimal = null;
  }

  cancelAddAnimal() {
    this.addAnimal = false;
  }

  newAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
    this.addAnimal = false;
  }

  editAnimal(currentAnimal) {
    this.selectedAnimal = currentAnimal;
    this.addAnimal = false;
  }

  cancelEdit() {
    this.selectedAnimal = null;
  }

  editComplete() {
    this.selectedAnimal = null;
  }

}
