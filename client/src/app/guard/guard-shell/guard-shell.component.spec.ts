import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardShellComponent } from './guard-shell.component';

describe('GuardShellComponent', () => {
  let component: GuardShellComponent;
  let fixture: ComponentFixture<GuardShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
