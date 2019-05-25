import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {WiffleBall2018TournamentComponent} from "./wiffle-ball-2018-tournament.component";


describe('WiffleBall2018TournamentComponent', () => {
  let component: WiffleBall2018TournamentComponent;
  let fixture: ComponentFixture<WiffleBall2018TournamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiffleBall2018TournamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiffleBall2018TournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
