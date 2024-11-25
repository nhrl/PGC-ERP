import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ps5Component } from './ps5.component';

describe('Ps5Component', () => {
  let component: Ps5Component;
  let fixture: ComponentFixture<Ps5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ps5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ps5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
