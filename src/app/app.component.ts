import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rxjs-tutorial';
  ngOnInit(): void {
    // this.metod1();
    this.metod2();

  }
  // ------------- Observable-------------------
  metod1() {
    // Observable() ile bir akış oluşturuyoruz akış 
    // içindeki datalara erişmek için sonra subscribe olmamız gerekir. 
    // verinin türünü bildirmek istiyorsak Observable()<number> 
    // şeklinde küçük büyük parantezlere türünü yazıyoruz.
    const observable = new Observable<number>(data => {
      // bir veri eklemek istiyorsak next() fonksiyonunu kullanıyoruz.
      data.next(1);
      data.next(3);
      data.next(5);
      // datanın sona erdiğini bilmek istiyorsak complete() kulanıyoruz
      // data sona erdiğinde başka bir data vermiyeceksek complete() kullanıyoruz.
      data.complete()
    });
    // verilere erişmek için abone oluyoruz.

    // observable.subscribe(a => {
    //   console.log(a);
    // })

    //  --------------------Observer---------------------------
    // observer => akışın içindeki dataları elde etmemizi 
    // sağlayan elde edeblmek için subcribe olanan fonksiynlardır. 

    // const observer = function (data:any) {
    //   console.log(data);
    // }

    // const observer = (data:any) => {
    //   console.log(data);
    // }

    // observable.subscribe(observer)
    // observable.subscribe((data:any)=>{
    //   console.log(data);
    // })
    //ornek:
  }

 
  metod2() {
     //  --------------------Subject---------------------------
    // Bir observable a birden fazla observer tüketiyorsa buna Subject denir.

    // let data: any = "Hilmi";
    // const subject = new Subject();
    // const subject = new BehaviorSubject(data);
    // const subject = new ReplaySubject(2);
    const subject = new AsyncSubject();
    subject.subscribe(data=> console.log(`ObservableA ${data}`))
    subject.subscribe(data=> console.log(`ObservableB ${data}`))
    subject.next(3);
    subject.next(5);
    subject.subscribe(data=> console.log(`ObservableC ${data}`))
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
