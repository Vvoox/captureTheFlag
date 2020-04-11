import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChallengeComponent } from './new-challenge.component';

describe('NewChallengeComponent', () => {
  let component: NewChallengeComponent;
  let fixture: ComponentFixture<NewChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
