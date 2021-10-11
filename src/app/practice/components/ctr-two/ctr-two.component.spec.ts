import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtrTwoComponent } from './ctr-two.component';

describe('CtrTwoComponent', () => {
  let component: CtrTwoComponent;
  let fixture: ComponentFixture<CtrTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtrTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtrTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
