import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumeCustomizerComponent } from './perfume-customizer.component';

describe('PerfumeCustomizerComponent', () => {
  let component: PerfumeCustomizerComponent;
  let fixture: ComponentFixture<PerfumeCustomizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfumeCustomizerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfumeCustomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
