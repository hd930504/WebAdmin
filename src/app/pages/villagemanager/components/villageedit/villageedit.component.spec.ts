import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageeditComponent } from './villageedit.component';

describe('VillageeditComponent', () => {
  let component: VillageeditComponent;
  let fixture: ComponentFixture<VillageeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillageeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
