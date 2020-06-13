import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreComponent } from './tre.component';

describe('TreComponent', () => {
  let component: TreComponent;
  let fixture: ComponentFixture<TreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
