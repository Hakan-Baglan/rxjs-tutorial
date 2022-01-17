import { Component, OnInit } from '@angular/core';
import { bindCallback, Observable } from 'rxjs';
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

    const obs: (url: string) => Observable<any[]> = bindCallback($.getJSON);

    obs(this.url).subscribe(data => console.log(data))

  }

}
