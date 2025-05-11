import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HidroizolaciaComponent } from './hidroizolacia.component';

describe('HidroizolaciaComponent', () => {
  let component: HidroizolaciaComponent;
  let fixture: ComponentFixture<HidroizolaciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HidroizolaciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HidroizolaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
