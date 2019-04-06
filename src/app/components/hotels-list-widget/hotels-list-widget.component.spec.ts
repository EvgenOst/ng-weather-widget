import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsListWidgetComponent } from './hotels-list-widget.component';

describe('HotelsListWidgetComponent', () => {
  let component: HotelsListWidgetComponent;
  let fixture: ComponentFixture<HotelsListWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsListWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsListWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
