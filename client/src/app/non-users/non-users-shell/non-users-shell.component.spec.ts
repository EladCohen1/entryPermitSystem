import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonUsersShellComponent } from './non-users-shell.component';

describe('NonUsersShellComponent', () => {
  let component: NonUsersShellComponent;
  let fixture: ComponentFixture<NonUsersShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonUsersShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonUsersShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
