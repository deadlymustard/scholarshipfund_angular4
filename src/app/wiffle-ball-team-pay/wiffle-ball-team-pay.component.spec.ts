import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiffleBallTeamPayComponent } from './wiffle-ball-team-pay.component';

describe('WiffleBallTeamPayComponent', () => {
  let component: WiffleBallTeamPayComponent;
  let fixture: ComponentFixture<WiffleBallTeamPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiffleBallTeamPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiffleBallTeamPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
