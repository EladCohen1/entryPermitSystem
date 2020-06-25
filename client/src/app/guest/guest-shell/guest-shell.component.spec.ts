import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestShellComponent } from './guest-shell.component';

describe('GuestShellComponent', () => {
  let component: GuestShellComponent;
  let fixture: ComponentFixture<GuestShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
