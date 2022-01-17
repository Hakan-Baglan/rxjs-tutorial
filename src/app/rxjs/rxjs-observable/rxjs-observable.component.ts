import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'rxjs-observable',
  templateUrl: './rxjs-observable.component.html',
  styleUrls: ['./rxjs-observable.component.scss']
})
export class RxjsObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      // ------------- Observable-------------------
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
    observable.subscribe((data:any)=>{
      console.log(data);
    })
    //ornek:
  }

}
