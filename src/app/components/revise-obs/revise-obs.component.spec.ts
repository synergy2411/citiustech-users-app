import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviseObsComponent } from './revise-obs.component';

describe('ReviseObsComponent', () => {
  let component: ReviseObsComponent;
  let fixture: ComponentFixture<ReviseObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviseObsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviseObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
