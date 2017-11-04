import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiffleBallEventDetailsComponent } from './wiffle-ball-event-details.component';

describe('WiffleBallEventDetailsComponent', () => {
  let component: WiffleBallEventDetailsComponent;
  let fixture: ComponentFixture<WiffleBallEventDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiffleBallEventDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiffleBallEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
