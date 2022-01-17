import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RxjsObservableComponent } from './rxjs/rxjs-observable/rxjs-observable.component';
import { RxjsSubjectComponent } from './rxjs/rxjs-subject/rxjs-subject.component';
import { RxjsSchedulerComponent } from './rxjs/rxjs-scheduler/rxjs-scheduler.component';
import { RxjsOperatorlerComponent } from './rxjs/rxjs-operatorler/rxjs-operatorler.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsObservableComponent,
    RxjsSubjectComponent,
    RxjsSchedulerComponent,
    RxjsOperatorlerComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
