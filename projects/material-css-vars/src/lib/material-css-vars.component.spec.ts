import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCssVarsComponent } from './material-css-vars.component';

describe('MaterialCssVarsComponent', () => {
  let component: MaterialCssVarsComponent;
  let fixture: ComponentFixture<MaterialCssVarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialCssVarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialCssVarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
