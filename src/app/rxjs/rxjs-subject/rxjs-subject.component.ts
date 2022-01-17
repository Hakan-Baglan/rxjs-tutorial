import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'rxjs-subject',
  templateUrl: './rxjs-subject.component.html',
  styleUrls: ['./rxjs-subject.component.scss']
})
export class RxjsSubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //  --------------------Subject---------------------------
    // Bir observable a birden fazla observer tüketiyorsa buna Subject denir.

    // let data: any = "Hilmi";
    // const subject = new Subject();
    // const subject = new BehaviorSubject(data);
    // const subject = new ReplaySubject(2);
    const subject = new AsyncSubject();
    subject.subscribe(data => console.log(`ObservableA ${data}`))
    subject.subscribe(data => console.log(`ObservableB ${data}`))
    subject.next(3);
    subject.next(5);
    subject.subscribe(data => console.log(`ObservableC ${data}`))
    subject.next(7);
    subject.next(9);
    subject.complete();
    subject.next("Ahmet");
    //  --------------------Subject-Türleri---------------------------
    // 1- BehavirSubject
    // 2- ReplaySubject
    // 3- AsyncSubject
    // 1- BehavirSubject = akışa subscribe olursa bir önceki değerden başlar.
    // 2- ReplaySubject = akışa subscribe olunan dataya ne kadar 
    // 3- AsyncSubject = akıştaki son değerin alınabilmesi için kullanılan Subject türüdür
    //    akışta sonuncu veriyi anlayabimek için complate() fonksiyonunun tetiklenmesini bekler
    //    bu durumda sadece 9 gelir akıştan.
  }

}
