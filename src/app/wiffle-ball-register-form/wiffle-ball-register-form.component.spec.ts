import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiffleBallRegisterFormComponent } from './wiffle-ball-register-form.component';

describe('WiffleBallRegisterFormComponent', () => {
  let component: WiffleBallRegisterFormComponent;
  let fixture: ComponentFixture<WiffleBallRegisterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiffleBallRegisterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiffleBallRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
