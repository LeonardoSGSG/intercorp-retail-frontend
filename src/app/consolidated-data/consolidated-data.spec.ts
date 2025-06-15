import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidatedData } from './consolidated-data';

describe('ConsolidatedData', () => {
  let component: ConsolidatedData;
  let fixture: ComponentFixture<ConsolidatedData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsolidatedData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsolidatedData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
