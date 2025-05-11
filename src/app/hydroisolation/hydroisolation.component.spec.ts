import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HydroisolationComponent } from './hydroisolation.component';

describe('HydroisolationComponent', () => {
  let component: HydroisolationComponent;
  let fixture: ComponentFixture<HydroisolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HydroisolationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HydroisolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
