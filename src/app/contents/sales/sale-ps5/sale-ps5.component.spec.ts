import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalePs5Component } from './sale-ps5.component';

describe('SalePs5Component', () => {
  let component: SalePs5Component;
  let fixture: ComponentFixture<SalePs5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalePs5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalePs5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
