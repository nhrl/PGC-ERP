import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleGamesComponent } from './sale-games.component';

describe('SaleGamesComponent', () => {
  let component: SaleGamesComponent;
  let fixture: ComponentFixture<SaleGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleGamesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaleGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
