import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoNightEventDetailsComponent } from './bingo-night-event-details.component';

describe('BingoNightEventDetailsComponent', () => {
  let component: BingoNightEventDetailsComponent;
  let fixture: ComponentFixture<BingoNightEventDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BingoNightEventDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BingoNightEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
