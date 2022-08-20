import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementFormatterPageComponent } from './placement-formatter-page.component';

describe('PlacementFormatterPageComponent', () => {
  let component: PlacementFormatterPageComponent;
  let fixture: ComponentFixture<PlacementFormatterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementFormatterPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementFormatterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
