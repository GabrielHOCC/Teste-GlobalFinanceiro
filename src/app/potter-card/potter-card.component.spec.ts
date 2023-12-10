import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotterCardComponent } from './potter-card.component';

describe('PotterCardComponent', () => {
  let component: PotterCardComponent;
  let fixture: ComponentFixture<PotterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PotterCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PotterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
