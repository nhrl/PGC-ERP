import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverComponent } from './deliver.component';

describe('DeliverComponent', () => {
  let component: DeliverComponent;
  let fixture: ComponentFixture<DeliverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeliverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
