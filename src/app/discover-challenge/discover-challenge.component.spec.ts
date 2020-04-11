import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverChallengeComponent } from './discover-challenge.component';

describe('DiscoverChallengeComponent', () => {
  let component: DiscoverChallengeComponent;
  let fixture: ComponentFixture<DiscoverChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
