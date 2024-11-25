import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesComponent } from './accessories.component';

describe('AccessoriesComponent', () => {
  let component: AccessoriesComponent;
  let fixture: ComponentFixture<AccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
