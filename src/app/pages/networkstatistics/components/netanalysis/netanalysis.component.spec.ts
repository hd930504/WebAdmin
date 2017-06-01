import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetanalysisComponent } from './netanalysis.component';

describe('NetanalysisComponent', () => {
  let component: NetanalysisComponent;
  let fixture: ComponentFixture<NetanalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetanalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
