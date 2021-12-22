## Observable

Observable负责从数据源中推送数据，类似promise

```ts
import { Observable } from 'rxjs';
const observable = new Observable(subscriber => {
  // 推送三个数据
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
});

console.log('before subscribe');
observable.subscribe(x => {
  console.log('获得 value ' + x);
});
console.log('subscribe');
```

输出

```
before subscribe
获得 value 1
获得 value 2
获得 value 3
subscribe
```



## lazy computations

之前与Promise对比时讲过，只要不订阅(调用subscribe)Observable，Observable的回调函数就不会执行

```ts
import { Observable } from 'rxjs';

const foo = new Observable(subscriber => {
  console.log('Hello');
  subscriber.next(42);
});

foo.subscribe(x => {
  console.log(x);
});
```



## Observable可同步、也可异步推送值

```TS
import { Observable } from 'rxjs';

const foo = new Observable(subscriber => {
  console.log('Hello');
  subscriber.next(42);
});

console.log('before');
foo.subscribe(x => {
  console.log(x);
});
console.log('after');
```

下面是异步：

```TS
import { Observable } from 'rxjs';

const foo = new Observable(subscriber => {
  console.log('Hello');
  subscriber.next(42);
  subscriber.next(100);
  subscriber.next(200);
  setTimeout(() => {
    subscriber.next(300); // happens asynchronously
  }, 1000);
});

console.log('before');
foo.subscribe(x => {
  console.log(x);
});
console.log('after');
```

output:

```
"before"
"Hello"
42
100
200
"after"
300
```



## 创建Observables

可用new Observable创建，但实际情况更多的是用of，from， interval等操作创建

```ts
import { Observable } from 'rxjs';
const observable = new Observable(function subscribe(subscriber) {
  const id = setInterval(() => {
    // 每秒推送一个 hi
    subscriber.next('hi')
  }, 1000);
});
```

## observer

Observer用户获取到Observable推送的值，Observers是一系列回调函数，也就是Observable.subscribe的回调函数

```
Observable.subscribe(x => console.log(x));
```

之前已经多次订阅过Observables，但都不是完整写法
Observable.subscribe方法有三个回调函数，上面写的只是其中最常用但一个

- "Next": 接收Observable推送过来但值
- "Error": 接收错误对象
- "Complete": 推送结束时触发(即使出现error)，不会收到任何值



### 手动结束推送

```TS
import { Observable } from 'rxjs';

const observable = new Observable(function subscribe(subscriber) {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  // 不调用complete方法，下面的observable.subscribe就不会输出complete
  subscriber.complete();
  subscriber.next(4); // 结束后再推送值，observable.subscribe也接收不到了
});

observable.subscribe(value => {
  console.log('value', value);
}, error => {
  console.error('error', error);
}, () => {
  console.log('complete');
});
```



### 发生错误

```TS
const observable = new Observable(function subscribe(subscriber) {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.error(new Error('出错了'));
});
observable.subscribe(value => {
  console.log('value', value);
}, error => {
  console.error('error err', error);
}, () => {
  console.log('complete');
});
```

可以用try/catch捕获错误

```TS
import { Observable } from 'rxjs';

const observable = new Observable(function subscribe(subscriber) {
  try {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.complete();
  } catch (err) {
    subscriber.error(err); // delivers an error if it caught one
  }
});
```



###  Observable.subscribe的完整写法

```TS
observable.subscribe(value => {
  console.log('value', value);
}, error => {
  console.error('error err', error);
}, () => {
  console.log('complete');
});
```

```TS
observable.subscribe({
  next(value) {
    console.log('value', value);
  },
  error(error) {
    console.error('error', error);
  },
  complete() {
    console.log('complete');
  }
});
```

## 取消订阅

observable.subscribe返回一个Subscription对象

```TS
const subscription = observable.subscribe(x => console.log(x));
```

调用subscription.unsubscribe()即可取消订阅

```TS
const observable = interval(1000);
const subscription = observable.subscribe(x => console.log(x));
setTimeout(() => {
  subscription.unsubscribe();
}, 5000);
```

