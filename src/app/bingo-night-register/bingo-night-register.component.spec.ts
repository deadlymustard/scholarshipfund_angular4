import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoNightRegisterComponent } from './bingo-night-register.component';

describe('BingoNightRegisterComponent', () => {
  let component: BingoNightRegisterComponent;
  let fixture: ComponentFixture<BingoNightRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BingoNightRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BingoNightRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
