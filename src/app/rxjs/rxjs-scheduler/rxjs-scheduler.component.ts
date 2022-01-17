import { Component, OnInit } from '@angular/core';
import { asyncScheduler, Observable, observeOn } from 'rxjs';

@Component({
  selector: 'rxjs-scheduler',
  templateUrl: './rxjs-scheduler.component.html',
  styleUrls: ['./rxjs-scheduler.component.scss']
})
export class RxjsSchedulerComponent implements OnInit {
  name = "";
  constructor() { }

  ngOnInit(): void {
    //  -------------------- Scheduler---------------------------
    // Bir akışın ne zaman başlayacağını  ve verinin ne zaman Observale lara ileteceğini kontrol eden nesnedir
    //Scheduler, üç bileşenden oluşur.

    //Execution Context = Görevin nerede ve ne zaman çalıştırılacağını (yürütüleceğini) gösterir.

    // Execution Policy: Öncelik veya diğer ölçütlere göre görevlerin nasıl saklanacağı ve hangi sırayla alınacağından sorumludur.

    // Clock: Scheduler’da bulunan now() getter metodu ile zaman kavramını verir. 
    // Eğer bir scheduler, belirli bir zamanda bir işlem yapmak durumundaysa zaman kavramına ihtiyacı vardır.
    console.log("Scheduler kullanılmayan ******");
    const observable = new Observable(data => {
      data.next(1);
      data.next(2);
      data.next(3);
      data.complete();
    });
    observable.subscribe(data => console.log(data));
    console.log("Scheduler kullanılmayan ******");
    console.log("**********************************")
    console.log("Scheduler kullanılan ******");
    const observable2 = new Observable(data => {
      data.next(1);
      data.next(2);
      data.next(3);
      data.complete()
    }).pipe(observeOn(asyncScheduler));
    observable.subscribe(data => console.log(data));
    console.log("Scheduler kullanılan ******");
  }

  ngAfterViewInit(): void {
    asyncScheduler.schedule(() => {
      this.name = "Hilmi";
    });
  }

}
