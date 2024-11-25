import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleAccessoriesComponent } from './sale-accessories.component';

describe('SaleAccessoriesComponent', () => {
  let component: SaleAccessoriesComponent;
  let fixture: ComponentFixture<SaleAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleAccessoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaleAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
