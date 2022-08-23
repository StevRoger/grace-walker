import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudienceNetworkReportReaderComponent } from './audience-network-report-reader.component';

describe('AudienceNetworkReportReaderComponent', () => {
  let component: AudienceNetworkReportReaderComponent;
  let fixture: ComponentFixture<AudienceNetworkReportReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudienceNetworkReportReaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudienceNetworkReportReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
