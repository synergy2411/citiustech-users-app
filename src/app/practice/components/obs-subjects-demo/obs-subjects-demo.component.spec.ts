import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsSubjectsDemoComponent } from './obs-subjects-demo.component';

describe('ObsSubjectsDemoComponent', () => {
  let component: ObsSubjectsDemoComponent;
  let fixture: ComponentFixture<ObsSubjectsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObsSubjectsDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsSubjectsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
