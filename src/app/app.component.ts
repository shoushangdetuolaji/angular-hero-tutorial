import {
  Component,
  NgModule,
  ViewChild,
  OnInit, ComponentRef, ComponentFactory, ComponentFactoryResolver, Injector, ApplicationRef, EmbeddedViewRef
} from '@angular/core';

import {TransferItem} from "./demos/components/transfer/types";
import { fromEvent } from 'rxjs';
import {scan, throttleTime} from "rxjs/operators";

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
    // let count = 0;
    // const rate = 1000;
    // let lastClick = Date.now() - rate;
    // document.addEventListener('click', () => {
    //   if (Date.now() - lastClick >= rate) {
    //     console.log(`Click ${++count} times`);
    //     lastClick = Date.now();
    //   }
    // });
    fromEvent(document, 'click')
      .pipe(
        throttleTime(1000),
        scan(count => count + 1, 0)
      )
      .subscribe(count => console.log(`Click ${count} times`));


  }
}
