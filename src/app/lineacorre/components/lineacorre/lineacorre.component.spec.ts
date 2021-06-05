import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineacorreComponent } from './lineacorre.component';

describe('LineacorreComponent', () => {
  let component: LineacorreComponent;
  let fixture: ComponentFixture<LineacorreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineacorreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineacorreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
