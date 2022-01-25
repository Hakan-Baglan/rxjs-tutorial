import { Component, OnInit } from '@angular/core';
import { bindCallback, concat, defer, from, fromEvent, generate, iif, interval, observable, Observable, of, range, throwError, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { combineLatest, combineLatestInit } from 'rxjs/internal/observable/combineLatest';



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
    //  --------------------Creation--Operatörler---------------------------
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

    // of operatörü = Verilen herhangi bir türdeki değeri observable dönüştüren operatördür.

    // const obs = of(1,2,3,"Ahmet",[true,false]);
    // obs.subscribe(data=>console.log(data))

    // 

    // range operatörü = belirtilen bir aralıkta dizisel değer yayan operartördür.
    // range(1,3);

    // const obs = range(555,20);
    // obs.subscribe(data=>console.log(data));

    //

    // thrrowError operaörü = Hiçbir öğe barındırmayan ve bir hata fırlatan  observable oluşturur.
    // throw(e)

    // throwError(new Error("Örnek bir hata")).subscribe(data=>console.log(data));

    // timer operatörü = Milisaniye cinsinden belirtilen süre kadar sonra  akış  yayacak olan observable nesnesi dödürür
    // timer(5000,1000).subscribe(data => console.log('Merhaba'));

    //

    // iif operatörü = iki observable arasında şarta bağlı seçim yapar.
    // const state:boolean = true;
    // const obs = iif(()=>state,of(1,3,5),of(10,11,12));
    // obs.subscribe(data=> console.log(data));

    //  --------------------Join--Creation--Operatörler---------------------------

    // const obs1 = of('A','B','C');
    // const obs2 = of(5,10,15);
    // const obs3 = of(1,2,3);

    // const combine = combineLatest(obs1,obs2,obs3);
    // combine.subscribe(data=> console.log(data));

    // const obs1 = timer(1500, 1000);
    // const obs2 = timer(500, 1000);
    // const obs3 = timer(250, 1000);

    // const combine = combineLatest(obs1, obs2, obs3);
    // combine.subscribe(data => console.log(data));

    //

    // concat operatörü = Verilen tüm observable ları sırayla yayan  observable oluşturur.

    // const obs1 = of(1,2,3);
    // const obs2 = of(4,5,6);
    // const obs3 = of(7,8,9);
    // const obss = concat(obs1,obs2,obs3);
    // obss.subscribe(data=> console.log(data));
  }

}
