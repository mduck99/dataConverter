import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertStringComponent } from './convert-string.component';

describe('ConvertStringComponent', () => {
  let component: ConvertStringComponent;
  let fixture: ComponentFixture<ConvertStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertStringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
