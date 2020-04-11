import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChallengesComponent } from './my-challenges.component';

describe('MyChallengesComponent', () => {
  let component: MyChallengesComponent;
  let fixture: ComponentFixture<MyChallengesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyChallengesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyChallengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
