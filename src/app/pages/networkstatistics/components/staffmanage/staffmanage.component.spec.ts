import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffmanageComponent } from './staffmanage.component';

describe('StaffmanageComponent', () => {
  let component: StaffmanageComponent;
  let fixture: ComponentFixture<StaffmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
