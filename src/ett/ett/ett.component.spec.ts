import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EttComponent } from './ett.component';

describe('EttComponent', () => {
  let component: EttComponent;
  let fixture: ComponentFixture<EttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
