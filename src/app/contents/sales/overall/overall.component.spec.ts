import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallComponent } from './overall.component';

describe('OverallComponent', () => {
  let component: OverallComponent;
  let fixture: ComponentFixture<OverallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OverallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
