import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtrOneComponent } from './ctr-one.component';

describe('CtrOneComponent', () => {
  let component: CtrOneComponent;
  let fixture: ComponentFixture<CtrOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtrOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtrOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
