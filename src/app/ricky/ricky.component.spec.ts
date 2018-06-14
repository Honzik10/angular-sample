import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RickyComponent } from './ricky.component';

describe('RickyComponent', () => {
  let component: RickyComponent;
  let fixture: ComponentFixture<RickyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RickyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
