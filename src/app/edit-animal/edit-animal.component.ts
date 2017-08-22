import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Animal } from './../animal.model';

@Component({
  selector: 'edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.css']
})
export class EditAnimalComponent implements OnInit {
  @Input() childSelectedAnimal: Animal;
  @Output() editCompleteSender = new EventEmitter();
  @Output() cancelEditClickedSender = new EventEmitter();

  editCompleteButtonClicked() {
    this.editCompleteSender.emit();
  }

  cancelEdit() {
    this.cancelEditClickedSender.emit();
  }

  ngOnInit() {
  }

}
