import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkDuplicateRemoverPageComponent } from './link-duplicate-remover-page.component';

describe('LinkDuplicateRemoverPageComponent', () => {
  let component: LinkDuplicateRemoverPageComponent;
  let fixture: ComponentFixture<LinkDuplicateRemoverPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkDuplicateRemoverPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkDuplicateRemoverPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
