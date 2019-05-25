import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {WiffleBall2017TournamentComponent} from "./wiffle-ball-2017-tournament.component";


describe('WiffleBall2017TournamentComponent', () => {
  let component: WiffleBall2017TournamentComponent;
  let fixture: ComponentFixture<WiffleBall2017TournamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiffleBall2017TournamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiffleBall2017TournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
