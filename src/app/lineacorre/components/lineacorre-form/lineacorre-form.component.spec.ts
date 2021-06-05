import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineacorreFormComponent } from './lineacorre-form.component';

describe('LineacorreFormComponent', () => {
  let component: LineacorreFormComponent;
  let fixture: ComponentFixture<LineacorreFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineacorreFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineacorreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
