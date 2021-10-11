import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-demo',
  templateUrl: './attribute-demo.component.html',
  styleUrls: ['./attribute-demo.component.css']
})
export class AttributeDemoComponent implements OnInit {

  dynamicClasses = {'my-feature' : true, 'my-border': false };

  dynamicStyles =  {'font-size' : '1.3em', 'border' : '2px green dashed'}

  onToggle(){
    this.dynamicClasses['my-border'] = !this.dynamicClasses['my-border']
    this.dynamicClasses['my-feature'] = !this.dynamicClasses['my-feature']
  }

  constructor() { }

  ngOnInit(): void {
  }

}
