import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { from, of, interval, range, fromEvent, forkJoin, combineLatest,  } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { take, map, pluck, filter, reduce, takeWhile, takeUntil,
  mergeAll, debounceTime, sampleTime, throttleTime, auditTime, debounce,
  mergeMap, concatAll, concatMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-obs-operators-demo',
  templateUrl: './obs-operators-demo.component.html',
  styleUrls: ['./obs-operators-demo.component.css']
})
export class ObsOperatorsDemoComponent implements OnInit, AfterViewInit {

  @ViewChild("btn") btn : ElementRef<HTMLButtonElement>;
  @ViewChild('btnAbort', { static : true}) btnAbort : ElementRef<HTMLButtonElement>;

  searchForm : FormGroup;
  search = new FormControl();

  constructor(private fb : FormBuilder) {
    this.searchForm = this.fb.group({
      search : this.search
    })
   }

  ngAfterViewInit(){
    fromEvent(this.btn.nativeElement, 'click').subscribe(response => {
      ajax.getJSON('https://api.github.com/users')
      .subscribe(console.log)
    })
  }

  urls : Array<string> = [];

  ngOnInit(): void {

    // ForkJoin
    const source1$ = interval(1000).pipe(take(4))
    const source2$ = interval(1000).pipe(take(5))
    // forkJoin({source1$, source2$})
    combineLatest([source1$, source2$])
      .subscribe(console.log)


    // concatAll
    // const source$ = fromEvent(this.btnAbort.nativeElement, 'click');
    // const source1$ = interval(1000).pipe(take(4))

    // source$.pipe(
    //   // mergeMap(val => source1$)
    //   // concatMap(val => source1$)
    //   switchMap(val => source1$)
    // ).subscribe(console.log)


    // const source2$ = interval(1000).pipe(take(5))
    // source1$.pipe(
    //   map(value => {
    //     console.log("MAP : ", value)
    //     return ajax.getJSON(`https://api.github.com/users`)
    //   }),
    //   // concatAll()
    //   mergeAll()
    // ).subscribe(console.log)


      // Type-ahead suggestions
      // this.search.valueChanges.pipe(
      //   debounceTime(2000),
      //   mergeMap(value => {
      //     return ajax.getJSON(`https://api.github.com/users/${value}/repos`)
      //   })
      // ).subscribe((response : Array<any>) => {
      //   console.log('RESPONSE - ', response);
      //   this.urls = response.map(r => r['git_url'])
      // })

    // Type-ahead suggestions
    // this.search.valueChanges.pipe(
    //   debounceTime(2000),
    //   map(value => {
    //     return ajax.getJSON(`https://api.github.com/users/${value}/repos`)
    //   }),
    //   mergeAll()
    // ).subscribe(response => {
    //   console.log('RESPONSE - ', response);
    // })

    // debounce
    // this.search.valueChanges
    // .pipe(
    //   // debounceTime(2000)
    //   // sampleTime(5000)
    //   // throttleTime(3000)
    //   auditTime(5000)
    //   )
    // .subscribe(console.log)




    // takeUntil
    // const abort$ = fromEvent(this.btnAbort.nativeElement, "click")
    // this.search.valueChanges
    //   .pipe(
    //     takeUntil(abort$)
    //   )
    //   .subscribe(console.log)


    // takeWhile

    // this.search.valueChanges.
    //   pipe(
    //     takeWhile((value)=>{
    //       console.log("[TAKE WHILE]", value)
    //       return !value.includes('foo');
    //     })
    //   ).
    // subscribe(console.log);

    const users = [
      {email : "test1@test.com", age : 32},
      {email : "test2@test.com", age : 33},
      {email : "test3@test.com", age : 34},
      {email : "test4@test.com", age : 35},
    ]

    const numbers = [2,3,4,5,6];



    // reduce
    // const source = from(numbers)
    // source.pipe(
    //   reduce((acc, curr)=>{
    //     return acc + curr
    //   })
    // ).subscribe(console.log)

    // pluck & filter
    // const source = from(users)
    // source.pipe(
    //   pluck("age"),
    //   filter(age => age > 33)
    // ).subscribe(console.log)


    // interval(1000).pipe(
    //   take(5),
    //   map(val => val*2)
    // ).subscribe(console.log)

    // AJAX Calls
    // ajax.getJSON('https://api.github.com/users')
    //   .subscribe(console.log)

    // fromEvent
    // fromEvent(document, 'click').subscribe(console.log)

    // range
    // range(1,5).subscribe(console.log)

    // interval
    // interval(1000).subscribe(console.log)

    // of
    // const source = of("Apple", "Banana", "Orange")
    // source.subscribe(console.log)


  // From
  // const arr = [1,2,3,4,5]
  // const source = from(arr)
  //   source.subscribe(console.log);
    // source.subscribe(response => console.log(response));

  }

}
