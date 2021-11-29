import {Component, NgModule, ViewChild, OnInit} from '@angular/core';
import {NgModel} from "@angular/forms";
import {TransferItem} from "./demos/components/transfer-panel/types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  list: TransferItem[] = [];
  constructor() {

  }
  ngOnInit():void {
   this.setList()
  }
  private setList() {
    this.list = [];
    const prefix = 'item' + Date.now().toString().slice(-3);
    console.log(prefix)
    for (let i = 0; i < 20; i++) {
      this.list.push({
        key: prefix + '_' + i,
        value: `${prefix}${i + 1}`,
        checked: i % 6 === 0
      });
    }
  }
  onChanged(selecteds: TransferItem[]) {
    console.log('selecteds', selecteds);
  }

}
