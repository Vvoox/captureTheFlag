import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyChellengeComponent } from './modify-chellenge.component';

describe('ModifyChellengeComponent', () => {
  let component: ModifyChellengeComponent;
  let fixture: ComponentFixture<ModifyChellengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyChellengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyChellengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
