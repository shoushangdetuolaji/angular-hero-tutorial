import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { TransferItem } from './types';

@Component({
  selector: 'app-transfer-panel',
  templateUrl: './transfer-panel.component.html',
  styleUrls: ['./transfer-panel.component.scss']
})
export class TransferPanelComponent implements OnInit, OnChanges {
  @Input() list: TransferItem[] = [];
  @Input() search = false;
  showList: TransferItem[] = [];
  selecteds: TransferItem[] = [];
  @Output() changed = new EventEmitter<TransferItem[]>();
  constructor() {
  }
  ngOnChanges(changes: SimpleChanges) {
    const { list } = changes;
    if (list) {
      this.showList = list.currentValue.slice();
      this.selecteds = this.list.filter(item => item.checked);
    }
  }
  ngOnInit(): void {
  }
  trackByItem() {}
  itemClick(target: TransferItem) {
    const index = this.targetIndex(target.key);
    if (index > -1) {
      this.selecteds.splice(index, 1);
    } else {
      this.selecteds.push(target);
    }
    this.changed.emit(this.selecteds);
  }
  targetIndex(key: string): number {
    return this.selecteds.findIndex(item => item.key === key);
  }
  onInput(event: Event) {
    const { value } = (event.target as HTMLInputElement);
    console.log('value', value);
    this.showList = this.list.filter(item => item.value.includes(value))
  }
}
