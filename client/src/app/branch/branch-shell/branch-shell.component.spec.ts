import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchShellComponent } from './branch-shell.component';

describe('BranchShellComponent', () => {
  let component: BranchShellComponent;
  let fixture: ComponentFixture<BranchShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
