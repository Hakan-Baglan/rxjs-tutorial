import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsObservableComponent } from './rxjs-observable.component';

describe('RxjsObservableComponent', () => {
  let component: RxjsObservableComponent;
  let fixture: ComponentFixture<RxjsObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
