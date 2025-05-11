import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruntiComponent } from './grunti.component';

describe('GruntiComponent', () => {
  let component: GruntiComponent;
  let fixture: ComponentFixture<GruntiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GruntiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GruntiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
