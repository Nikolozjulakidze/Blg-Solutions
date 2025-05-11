import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfFloorComponent } from './self-floor.component';

describe('SelfFloorComponent', () => {
  let component: SelfFloorComponent;
  let fixture: ComponentFixture<SelfFloorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelfFloorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelfFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
