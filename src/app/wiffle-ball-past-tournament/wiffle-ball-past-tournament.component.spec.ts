import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiffleBallPastTournamentComponent } from './wiffle-ball-past-tournament.component';

describe('WiffleBallPastTournamentComponent', () => {
  let component: WiffleBallPastTournamentComponent;
  let fixture: ComponentFixture<WiffleBallPastTournamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiffleBallPastTournamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiffleBallPastTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
