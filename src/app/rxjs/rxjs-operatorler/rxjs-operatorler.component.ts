import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { audit, auditTime, bindCallback, concat, debounce, debounceTime, defer, distinct, distinctUntilChanged, distinctUntilKeyChanged, elementAt, filter, first, forkJoin, from, fromEvent, generate, ignoreElements, iif, interval, last, map, mapTo, merge, observable, Observable, of, partition, race, range, sample, sampleTime, single, throwError, timer, zip } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { combineLatest, combineLatestInit } from 'rxjs/internal/observable/combineLatest';



declare var $: any;

interface Person {
  name: string;
  age: number;
}
@Component({
  selector: 'rxjs-operatorler',
  templateUrl: './rxjs-operatorler.component.html',
  styleUrls: ['./rxjs-operatorler.component.scss']
})
export class RxjsOperatorlerComponent implements OnInit, AfterViewInit {
  url: string = "https://jsonplaceholder.typicode.com/posts";
  constructor() { }

  @ViewChild('hakan') txt!: ElementRef;

  ngAfterViewInit(): void {
    const obs = fromEvent(this.txt.nativeElement, 'keyup');
    obs.pipe(debounce(x => interval(100))).subscribe(data => console.log(data));
  }



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

    //

    // forkJoin operatörü = Observable ların tamamlanmasını bekler
    //  ve sonra yayınlanan sonucu  değerlerin elde edilmesini sağlar.

    // const obs1 = of(1,2,3);
    // const obs2 = of(4,5,6);
    // const obs3 = of(7,8,9);
    // const obs4 = forkJoin(obs1,obs2,obs3);
    // obs4.subscribe(data=> console.log(data));

    //

    // merge operatörü = Observable ları birleştirerek tek  bir observable oluşturur.


    // const obs1 = of('a','b','c');
    // const obs2 = of(4,5,6);
    // const obs4 = merge(obs1,obs2);
    // obs4.subscribe(data=> console.log(data));

    //

    // partition operatörü = Observable ı belirli şarta göre, şartı 
    // karşılayanlar ve karşılamayanlar olarak ikiyeye ayırır.

    // const obs1 = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    // const [obs2, obs3] = partition(obs1, x => x % 3 == 0);
    // obs2.subscribe(data => console.log(data + " Şartı sağlayanlar"));
    // obs3.subscribe(data => console.log(data+ " Şartı sağlamayanlar"));

    //

    // race operatörü = ilk yayına başlayan observable abone olur.

    // const obs1 = interval(1000).pipe(mapTo("Ahmet"));
    // const obs2 = interval(500).pipe(mapTo("Mehmet"));
    // const obs3 = interval(2000).pipe(mapTo("Hilmi"));

    // race(obs1, obs2, obs3).subscribe(data => console.log(data));

    //

    // zip operatörü = Birder fazzla observable yayındaki dataları dizi olarak döndüren operatördür.

    // const obs1 = of(1, 2, 3);
    // const obs2 = of(4, 5, 6);
    // const obs3 = of(7, 8, 9);
    // zip(obs1, obs2, obs3).subscribe(data => console.log(data));

    //

    // pipe Fonksiyonu = Kod içerisinde yaygın olarak kullanılan birden fazla operatör
    // dizisi varsa eğer pipe fonksiyonu kullanılır.

    // const obs = of(1, 2, 3, 5676, 22, 76, 222, 3434, 6546, 2342, 45434, 22112, 33, 443, 5565);

    // obs.pipe(filter(x => x % 3 == 0), map(x => x + "değeri"))
    //    .subscribe(data=> console.log(data));

    //  --------------------Filtering-Operators---------------------------

    // " audit" operatörü = Bir süre için observable akışındaki değerler üzerinde işlem yapmamıza
    // izin verir ve ardından en sonuncu(yeni) değerler yayınlar.

    // const obs = interval(1000);
    // const obs2 = obs.pipe(audit(x => interval(2000)),map(x => x + "değeri"));
    // // obs.subscribe(data => console.log(data));
    // obs2.subscribe(data => console.log(data));

    //

    // auditTime operatörü = audit operatörünün paremetreli halidir.

    // const obs = interval(1000);
    // const obs2 = obs.pipe(auditTime(2000), map(x => x + "değeri"));
    // obs2.subscribe(data => console.log(data));

    //

    // debounce operatörü = Akıçtaki değerlerin zaman aşımı süresini belirleyebilmek için  kullanılan bir operatördür.

    // const obs = fromEvent(document,'click');
    // obs.pipe(debounce(x=> interval(250))).subscribe(data => console.log("Tıklandı..."));

    // debounceTime operatörü = debonce operatörünün parametreli halidir.

    // const obs = fromEvent(document, 'click');
    // obs.pipe(debounceTime(250)).subscribe(data => console.log("Tıklandı..."));

    // distinct operatörü = Akıştaki verilerden tekrar edenleri tekil olarak döndüren operatördür.
    // const obs = of("Halil","Halil","Hakan","Abdullah","Kasım","Kasım");
    // obs.pipe(distinct(x=> x)).subscribe(data => console.log(data)); 

    // distinctUntilChanged operatörü = Akıştaki verileri değişiklik  olana kadar tekileştirilen  operatördür

    // distinctUntilKeyChanged operatörü = Akıştaki objelerden verilen key e anhtar değere göre
    // dğişiklik olana kadar tekileştiren operatördür. 

    // const obs = of<Person[]>(
    //   {age: 120,name: "Hilmi"},
    //   {age: 10,name: "Hilmi"},
    //   {age: 110,name: "Hilmi"},
    //   {age: 30,name: "Kasım"},
    //   {age: 370,name: "Kasım"},
    //   {age: 70,name: "Hakan"},
    //   {age: 730,name: "Kasım"},
    //   {age: 30,name: "Kasım"},
    //   {age: 140,name: "Abdullah"},
    //   {age: 1120,name: "Abdullah"},
    //   {age: 110,name: "Halil"}
    // );

    // obs.pipe(distinctUntilKeyChanged("name")).subscribe(data => console.log(data))

    // elementAt operatörü = akıştaki verilen değerlerden index numarası verileri döndüren operatördür.

    // const obs = of(1,2,3,4,234,231,12);
    // obs.pipe(elementAt(1)).subscribe(data => console.log(data))

    // 

    // filter operatörü = akıştaki verileri filterelemeye yarayan operatördür.

    // const obs = of("Abdullah","Kasım","Melih","Burak","İsmail","Eyüp").pipe(filter(el=>el.indexOf("a") === -1));
    // obs.subscribe(data => console.log(data));

    //

    // first operatörü = akıştaki ilk değeri getiren operatördür.

    // const obs = of(1,2,3,4,234,231,12);
    // obs.pipe(first()).subscribe(data => console.log(data));

    //

    // ignoreElements operatörü = Observable tarafından yayılan tüm öğeleri yok sayar,görmezden gelir 
    // yalnızca copmlete ve error çıktılarını yakalar.

    // const obs = of(1, 2, 3).pipe(ignoreElements());
    // obs.subscribe(data => console.log(data), error => console.log(error), () => {
    //   console.log("the end");
    // })

    //

    // last operatörü = Observable daki son değeri yayar.

    // const obs = of(1, 2, 3, 4, 234, 231, 12);
    // obs.pipe(last()).subscribe(data => console.log(data));

    //

    // sample operatörü = Periyodik zaman aralıkları  içinde bir observable yayılan  en son öğeyi yayar.

    // const second = interval(1000);
    // const obs = fromEvent(document,'click');
    // const result = second.pipe(sample(obs));
    // result.subscribe(data => console.log(data));

    // sampleTime operatörü = Periyodik zaman aralıkları içinde bir
    //  observable tarafından  yayılan en son öğeyi getirir

    // const obs = fromEvent(document,'click');
    // const result = obs.pipe(sampleTime(1000));
    // result.subscribe(data => console.log(data));

    // single operatörü = Bu operatör neticesinde bildirilen şarta uygun 
    // birdern fazla değer söz konusuysa hata verecek yahut herhangi bir değer yokfa-stack 'undifined'
    // dönecektir. Verilen şarta uygun sade ve sadece tek bir değer döndürmelidir.

    const obs = range(1, 10).pipe(single(x => x == 10));
    obs.subscribe({
      next: data => console.log(data),
      error: err => console.log(err)
    })


  }

}
