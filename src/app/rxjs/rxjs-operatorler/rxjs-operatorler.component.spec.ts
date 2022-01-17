import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsOperatorlerComponent } from './rxjs-operatorler.component';

describe('RxjsOperatorlerComponent', () => {
  let component: RxjsOperatorlerComponent;
  let fixture: ComponentFixture<RxjsOperatorlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsOperatorlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsOperatorlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
