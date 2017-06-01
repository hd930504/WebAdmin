import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyslistComponent } from './syslist.component';

describe('SyslistComponent', () => {
  let component: SyslistComponent;
  let fixture: ComponentFixture<SyslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
