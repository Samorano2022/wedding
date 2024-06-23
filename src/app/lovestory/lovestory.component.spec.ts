import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LovestoryComponent } from './lovestory.component';

describe('LovestoryComponent', () => {
  let component: LovestoryComponent;
  let fixture: ComponentFixture<LovestoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LovestoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LovestoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
