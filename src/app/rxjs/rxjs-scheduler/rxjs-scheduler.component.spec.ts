import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsSchedulerComponent } from './rxjs-scheduler.component';

describe('RxjsSchedulerComponent', () => {
  let component: RxjsSchedulerComponent;
  let fixture: ComponentFixture<RxjsSchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsSchedulerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
