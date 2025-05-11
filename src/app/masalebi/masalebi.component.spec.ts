import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasalebiComponent } from './masalebi.component';

describe('MasalebiComponent', () => {
  let component: MasalebiComponent;
  let fixture: ComponentFixture<MasalebiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MasalebiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MasalebiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
