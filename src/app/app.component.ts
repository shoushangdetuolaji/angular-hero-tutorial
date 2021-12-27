import {
  Component,
  NgModule,
  ViewChild,
  OnInit, ComponentRef, ComponentFactory, ComponentFactoryResolver, Injector, ApplicationRef, EmbeddedViewRef
} from '@angular/core';

import {TransferItem} from "./demos/components/transfer/types";
import {
  empty,
  from,
  fromEvent,
  Observable,
  of,
  interval,
  timer,
  iif,
  combineLatest,
  range,
  concat,
  forkJoin,
  merge,
  partition,
  race,
  mapTo,
  zip,
  startWith,
  endWith,
  withLatestFrom,
  bufferCount,
  bufferWhen,
  concatMap
} from 'rxjs';
import { take, map, concatAll, mergeAll, pluck, buffer, bufferTime, bufferToggle, concatMapTo, exhaust } from 'rxjs/operators';

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

    // const firstTimer = timer(0, 1000);
    // const secondTimer = timer(500, 1000);
    // const combinedTimers = combineLatest(firstTimer, secondTimer);
    // combinedTimers.subscribe(val => console.log(val));

    // const timer$ = interval(1000).pipe(take(4));
    // const sequence$ = range(1, 10);
    // const result = concat(timer$, sequence$);
    // result.subscribe(x => console.log(x));

    // const observable = forkJoin([
    //   of(1, 2, 3, 4),
    //   Promise.resolve(8),
    //   timer(4000)
    // ]);
    // observable.subscribe({
    //   next: value => console.log(value),
    //   complete: () => console.log('this is how it ends!')
    // });

    // const click$ = fromEvent(document, 'click');
    // const timer$ = interval(1000);
    // const clickorTimer = merge(click$, timer$);
    // clickorTimer.subscribe(x => console.log(x));

    // const timer1 = interval(1000).pipe(take(10), mapTo('a'));
    // const timer2 = interval(2000).pipe(take(6), mapTo('b'));
    // const timer3 = interval(500).pipe(take(10), mapTo('c'));
    //
    // // 最后一个参数设为2，表示不管合并了多少个流，最多也只能merge其中的两个（与参数顺序无关）
    // const merged = merge(timer1, timer2, timer3, 2);
    // merged.subscribe(x => console.log(x));

    // const observableValues = of(1, 2, 3, 4, 5, 6);
    // const [evens$, odds$] = partition(observableValues, (value, index) => value % 2 === 0);
    // odds$.subscribe(x => console.log('odds', x));
    // evens$.subscribe(x => console.log('evens', x));

    // const obs1 = interval(1000).pipe(mapTo('fast one'));
    // const obs2 = interval(2000).pipe(mapTo('medium one'));
    // const obs3 = interval(3000).pipe(mapTo('slow one'));
    //
    // race(obs1, obs2, obs3).subscribe(winner => console.log(winner));

    // const age$ = of(27, 25, 29);
    // const name$ = of('Foo', 'Bar', 'Beer');
    // const isDev$ = of(true, true, false);
    //
    // zip(age$, name$, isDev$).subscribe(x => console.log(x));

    // const clicks = fromEvent(document, 'click');
    // const higherOrder = clicks.pipe(
    //   map(ev => interval(1000).pipe(take(4))),
    // );
    // const firstOrder = higherOrder.pipe(concatAll());
    // firstOrder.subscribe(x => console.log(x));

    // const clicks = fromEvent(document, 'click');
    // const higherOrder = clicks.pipe(map((ev) => interval(1000)));
    // const firstOrder = higherOrder.pipe(mergeAll());
    // firstOrder.subscribe(x => console.log(x));

    // of('from source')
    //   .pipe(
    //     startWith('first', 'second'),
    //     endWith('end')
    //   )
    //   .subscribe(x => console.log(x));

    // const clicks = fromEvent(document, 'click')
    //   .pipe(pluck('clientX'));
    // const interval$ = interval(1000);
    // const result = clicks.pipe(withLatestFrom(interval$));
    // // const result = interval$.pipe(withLatestFrom(clicks));
    // result.subscribe(x => console.log(x));

    // const clicks = fromEvent(document, 'click');
    // console.log(clicks);
    // const tagNames = clicks.pipe(pluck('target', 'tagName'));
    // tagNames.subscribe(x => console.log(x));

    // const clicks = fromEvent(document, 'click');
    // const intervalEvents = interval(1000);
    // const buffered = intervalEvents.pipe(buffer(clicks));
    // buffered.subscribe(x => console.log(x));

    // const clicks = fromEvent(document, 'click');
    // const buffered = clicks.pipe(bufferCount(3));
    // buffered.subscribe(x => console.log(x));

//     const clicks = fromEvent(document, 'click').pipe(pluck('clientX'));
// // 只要收集到3个值，就将值推送出去，并且下一轮收集会从上一轮指定索引的位置开始复用
//     const buffered = clicks.pipe(bufferCount(3, 1));
//     buffered.subscribe(x => console.log(x));

    // const clicks = fromEvent(document, 'click');
    // const buffered = clicks.pipe(bufferTime(1000));
    // buffered.subscribe(x => console.log(x));

    // const sourceInterval = interval(1000);
    // const startInterval = interval(5000);
    // const closingInterval = (val: any) => {
    //   console.log(`${val} 开始缓冲! 3秒后关闭`);
    //   return interval(3000);
    // }
    // // 每5秒会开启一个新的缓冲区以收集发出的值，3秒后发出缓冲的值，并关闭当前缓冲区
    // const bufferToggleInterval = sourceInterval.pipe(
    //   bufferToggle(
    //     startInterval,
    //     closingInterval
    //   )
    // );
    // const subscribe = bufferToggleInterval.subscribe(val =>
    //   console.log('Emitted Buffer:', val)
    // );

    // const oneSecondInterval = interval(1000);
    // const clicks = fromEvent(document, 'click');
    // const bufferWhenExample = oneSecondInterval.pipe(bufferWhen(() => clicks));
    // const subscribe = bufferWhenExample.subscribe(val => console.log('Emitted Buffer: ', val));

    // const source = of(10, 100);
    // const example = source.pipe(concatMap(val => of(val * 2)));
    // const subscribe = example.subscribe(val =>
    //   console.log('Example w/ Promise:', val)
    // );
    // console.log(example)

    // const source = of(10, 100);
    // const example = source.pipe(concatMapTo(of('abc')));
    // const subscribe = example.subscribe(val =>  console.log('Example w/ Promise:', val));

    const clicks = fromEvent(document, 'click');
    const higherOrder = clicks.pipe(
      map((ev) => interval(1000).pipe(take(5))),
    );
    const result = higherOrder.pipe(exhaust());
    result.subscribe(x => console.log(x));
  }

}
