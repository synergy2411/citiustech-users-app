import { Comment } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-comment',
  templateUrl: './user-comment.component.html',
  styleUrls: ['./user-comment.component.css']
})
export class UserCommentComponent implements OnInit {

  @Input() comments: Comment[];

  tab = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(comment : Comment){
    this.comments.push(comment);
    this.tab= 1;
  }

}
