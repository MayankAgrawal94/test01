import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPersionComponent } from './add-edit-persion.component';

describe('AddEditPersionComponent', () => {
  let component: AddEditPersionComponent;
  let fixture: ComponentFixture<AddEditPersionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditPersionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
