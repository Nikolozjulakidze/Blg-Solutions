import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhitxiComponent } from './phitxi.component';

describe('PhitxiComponent', () => {
  let component: PhitxiComponent;
  let fixture: ComponentFixture<PhitxiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhitxiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhitxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
