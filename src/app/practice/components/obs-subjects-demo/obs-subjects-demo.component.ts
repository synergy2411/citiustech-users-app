import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-obs-subjects-demo',
  templateUrl: './obs-subjects-demo.component.html',
  styleUrls: ['./obs-subjects-demo.component.css']
})
export class ObsSubjectsDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // REPLAY SUBJECT
    const subject = new ReplaySubject(2);

    subject.next(101)
    subject.next(201)
    subject.next(301)

    subject.subscribe(val => console.log("SUBS 1 : ", val))
    subject.next(401)
    subject.subscribe(val => console.log("SUBS 2 : ", val))


    // BEHAVIOUR SUBJECT
    // const sub = new BehaviorSubject(101);
    // sub.subscribe(val => console.log("SUB 1 : ", val))

    // sub.next(201)

    // sub.subscribe(val => console.log("SUB 2 : ", val))

    // SUBJECT
    // const subject = new Subject()

    // subject.subscribe(val => console.log("SUB 1 : ", val))

    // subject.next(190);

    // subject.subscribe(val => console.log("SUB 2 : ", val))

    // subject.next(201);
    // subject.next(321);

  }

}
