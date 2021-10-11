import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-add-new-note',
  templateUrl: './add-new-note.component.html',
  styleUrls: ['./add-new-note.component.css']
})
export class AddNewNoteComponent implements OnInit {

  addItemForm : FormGroup;
  @Output() addItemEvent = new EventEmitter<boolean>();

  constructor(private fb : FormBuilder, private noteService : NoteService) {
    this.addItemForm = this.fb.group({
      title : new FormControl('', [Validators.required, Validators.minLength(8)]),
      body : new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  onAddItem(){
    const {title, body} = this.addItemForm.value;
    this.noteService.createNote({title, body})
      .subscribe(result => {
        this.addItemEvent.emit(true)
      })
  }

  onClose(){
    this.addItemEvent.emit(true)
  }

}
