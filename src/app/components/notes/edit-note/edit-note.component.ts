import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/model/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {

  @Input() note : Note;
  @Output() noteEditEvent = new EventEmitter<boolean>()
  constructor(private noteService : NoteService) { }

  ngOnInit(): void {
  }

  onDelete(note: Note){
    this.noteService.deleteNote(note.id)
    .subscribe(response => {
      this.noteEditEvent.emit(true);
    })
  }

  onEdit(note : Note){
    const { id, body} = note;
    this.noteService.updateNote(id, body)
      .subscribe(response => {
        this.noteEditEvent.emit(false);
      })
  }

}
