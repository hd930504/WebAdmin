import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyseditComponent } from './sysedit.component';

describe('SyseditComponent', () => {
  let component: SyseditComponent;
  let fixture: ComponentFixture<SyseditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyseditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
