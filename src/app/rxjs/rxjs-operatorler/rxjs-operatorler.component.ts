import { Component, OnInit } from '@angular/core';
import { bindCallback, defer, from, fromEvent, generate, interval, Observable, of, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';



declare var $: any;
@Component({
  selector: 'rxjs-operatorler',
  templateUrl: './rxjs-operatorler.component.html',
  styleUrls: ['./rxjs-operatorler.component.scss']
})
export class RxjsOperatorlerComponent implements OnInit {

  url: string = "https://jsonplaceholder.typicode.com/posts";
  constructor() { }

  ngOnInit(): void {
    //  --------------------Operatörler---------------------------
    // ajax operatörü = Herhangi bir edpoint e yapılan bir istek 
    // neticesinde gelen sonuçları observable dödüren fonksiyondur.

    // 1. kullanım
    // ajax.getJSON(this.url).subscribe(data => console.log(data));

    // 2. kullanım
    // ajax(this.url).subscribe(data => console.log(data));

    //post işlemi
    // ajax({
    //   url: this.url,
    //   method: "post"
    // })

    // ------

    // bindCallback operatörü = özünde bir operatör olmasada yapılan  işlemler neticesinde
    // callback fonksiyonlarını yakalar ve Observable nesnesi olarak döndürür.

    // $.getJSON(this.url, (data: any) => console.log(data));

    // const obs: (url: string) => Observable<any[]> = bindCallback($.getJSON);

    // obs(this.url).subscribe(data => console.log(data))

    // ------

    // defer operatörü = Elimizdeki herhangi bir observable nesnesine biz
    //  subscribe oldumuz anda bu nesnenin oluşmasını istiyorsak defer operatörünü kullana biliriz

    // const obs1 = of(new Date());
    // const obs2 = defer(() => of(new Date()));

    // timer(5000).subscribe(()=>{
    //   obs1.subscribe(data => console.log("of(): ",data))
    //   obs2.subscribe(data => console.log("defer() : ",data))
    // })

    // ------

    // from operatörü = Herhangi bir diziyi alıp geriye observable döndüren bir operatördür.
    // const sayilar = [1,2,3];
    // const obs = from(sayilar);
    // obs.subscribe(data=>{
    //   console.log("sayilar",data);
    // });

    // const cars = new Map<string,string>();
    // cars.set("Ford","Focus"); 
    // cars.set("Wolsvagen","Passat"); 
    // cars.set("Audi","A6"); 
    // cars.set("Fiat","Egea"); 
    // const obs2 = from(cars);
    // obs2.subscribe(data=>console.log("Cars",data))

    // fromEvent operatörü = Herhangi bir nesnenin belirtilen  event'ini yakalayarak 
    // observable nesnesi olarak sunan operatördür.
    // fromEvent(element,'click');

    // const button = document.getElementsByTagName("button")[0];
    // button.addEventListener("click",()=>{
    //   console.log("tıklandı");
    // })
    // const button = document.getElementsByTagName("button")[0];
    // const obs = fromEvent(button, "click");
    // obs.subscribe(a => console.log(a));

    // 
    // generate operatörü = Verilen şarta göre oluşturularak observable döndüren bir operatörü.

    // generate(1, x => x < 3, x => x + 1);

    // const obs = generate(100, x => x > 0,x => x - 3);
    // obs.subscribe(data=>console.log(data))

    //

    // interval operatorü = Belirtilen sayısal değere karşılık gelen 
    // zaman aralığında periyot  oluşturan  bir operatördür*(sayısal değer milisaniye cinsinden olması gerekiyor.).

    // interval(1000);

    // const obs = interval(5000);
    // obs.subscribe(data=>console.log("Merhaba",data));
    

  }

}
