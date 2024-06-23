import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroomlovestoryComponent } from './groomlovestory.component';

describe('GroomlovestoryComponent', () => {
  let component: GroomlovestoryComponent;
  let fixture: ComponentFixture<GroomlovestoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroomlovestoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroomlovestoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
