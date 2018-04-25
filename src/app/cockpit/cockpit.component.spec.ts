import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CockpitComponent } from './cockpit.component';
import { EventEmitter } from 'selenium-webdriver';

describe('CockpitComponent', () => {
  let component: CockpitComponent;
  let fixture: ComponentFixture<CockpitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CockpitComponent ],
      imports: [
        EventEmitter
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CockpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
