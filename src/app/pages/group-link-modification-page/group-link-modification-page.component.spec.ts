import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupLinkModificationPageComponent } from './group-link-modification-page.component';

describe('GroupLinkModificationPageComponent', () => {
  let component: GroupLinkModificationPageComponent;
  let fixture: ComponentFixture<GroupLinkModificationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupLinkModificationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupLinkModificationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
