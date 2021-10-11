
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Comment } from 'src/app/model/user';


@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

 @Output() commentEvent = new EventEmitter<Comment>()

  numbers = [1,2,3,4,5];

  constructor() {
    this.numbers = Array(5).fill(1).map((x,i)=>i)
   }

  ngOnInit(): void {
  }

  onAddItem(f: NgForm){
    const {stars, author, body} = f.value;
    let comment : Comment = {
      author, stars, body
    }
    this.commentEvent.emit(comment)
    f.reset();
  }
  onReset(f: NgForm){
    f.reset()
  }

}
