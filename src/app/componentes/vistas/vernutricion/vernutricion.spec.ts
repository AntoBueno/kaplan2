import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VernutricionPage } from './vernutricion';

describe('VernutricionPage', () => {
  let component: VernutricionPage;
  let fixture: ComponentFixture<VernutricionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VernutricionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VernutricionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
