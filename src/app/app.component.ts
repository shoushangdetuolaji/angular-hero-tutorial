import {
  Component,
  NgModule,
  ViewChild,
  OnInit, ComponentRef, ComponentFactory, ComponentFactoryResolver, Injector, ApplicationRef, EmbeddedViewRef
} from '@angular/core';

import {TransferItem} from "./demos/components/transfer/types";
import {empty, from, fromEvent, Observable, of, map, interval, timer, iif} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  list: TransferItem[] = [];
  constructor(
  ) {}
  ngOnInit(): void {
    // const source = of({name: 'Brain'}, [1, 2, 3], function hello() {
    //   return 'Hello';
    // });
    // const arraySource = from([1, 2, 3, 4, 5]);
    // const arraySource = from(new Promise(resolve => resolve('hello world')));
    // const arraySource = from(Promise.reject(new Error('err promise')));


    // const subscribe = arraySource.subscribe(
    //   val => console.log(val),
    //   error => console.error(error)
    // );

    // const map = new Map([
    //   [1, 'hi']
    // ]);
    // map.set(2, 'Bye');
    // map.set(3, 'rxjs');
    // const mapSource = from(map);
    // console.log(map)
    // mapSource.subscribe(res => console.log(res));

    // const result = empty();
    // result.subscribe(
    //   res => console.log(res),
    //   error => {},
    //   () => console.log('ok')
    // )

    // const source = fromEvent(document, 'click');
    // const example = source.pipe(map(event => `Event time: ${event.timeStamp}`));
    // example.subscribe(val => console.log(val))

    // const source = timer(1000);
    // const subscribe = source.subscribe(val => console.log(val));

    const random = Math.random();
    console.log('random', random);
    const firstOrSecond = iif(
      () => random > 0.5,
      of('first'),
      of('second'),
    );
    firstOrSecond.subscribe(res => {
      console.log('res', res);
    });
  }

}
