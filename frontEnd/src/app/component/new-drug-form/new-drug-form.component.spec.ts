import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDrugFormComponent } from './new-drug-form.component';

describe('NewDrugFormComponent', () => {
  let component: NewDrugFormComponent;
  let fixture: ComponentFixture<NewDrugFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDrugFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDrugFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
