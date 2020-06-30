import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryPermitFormComponent } from './entry-permit-form.component';

describe('EntryPermitFormComponent', () => {
  let component: EntryPermitFormComponent;
  let fixture: ComponentFixture<EntryPermitFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryPermitFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryPermitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
