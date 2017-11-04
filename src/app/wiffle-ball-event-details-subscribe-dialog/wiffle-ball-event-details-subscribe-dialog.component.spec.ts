import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiffleBallEventDetailsSubscribeDialogComponent } from './wiffle-ball-event-details-subscribe-dialog.component';

describe('WiffleBallEventDetailsSubscribeDialogComponent', () => {
  let component: WiffleBallEventDetailsSubscribeDialogComponent;
  let fixture: ComponentFixture<WiffleBallEventDetailsSubscribeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiffleBallEventDetailsSubscribeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiffleBallEventDetailsSubscribeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
