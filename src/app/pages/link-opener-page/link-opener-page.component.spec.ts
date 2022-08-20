import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkOpenerPageComponent } from './link-opener-page.component';

describe('LinkOpenerPageComponent', () => {
  let component: LinkOpenerPageComponent;
  let fixture: ComponentFixture<LinkOpenerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkOpenerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkOpenerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
