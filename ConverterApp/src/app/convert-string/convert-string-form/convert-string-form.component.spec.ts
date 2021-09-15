import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertStringFormComponent } from './convert-string-form.component';

describe('ConvertStringFormComponent', () => {
  let component: ConvertStringFormComponent;
  let fixture: ComponentFixture<ConvertStringFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertStringFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertStringFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
