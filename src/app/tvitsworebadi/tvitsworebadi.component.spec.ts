import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvitsworebadiComponent } from './tvitsworebadi.component';

describe('TvitsworebadiComponent', () => {
  let component: TvitsworebadiComponent;
  let fixture: ComponentFixture<TvitsworebadiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TvitsworebadiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TvitsworebadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
