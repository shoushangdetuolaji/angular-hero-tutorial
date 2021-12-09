import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {TransferItem} from '../types';
import {TransferComponent} from '../transfer.component';

@Component({
  selector: 'app-transfer-panel',
  templateUrl: './transfer-panel.component.html',
  styleUrls: ['./transfer-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransferPanelComponent implements OnInit, OnChanges {
  @Input() list: TransferItem[] = [];
  @Input() search = false;
  // showList: TransferItem[] = [];
  selecteds: TransferItem[] = [];
  // @Output() changed = new EventEmitter<TransferItem[]>();
  @Output() filtered = new EventEmitter<string>();
  @Output() select = new EventEmitter<number>();
  constructor(readonly parent: TransferComponent) {}

  ngOnChanges(changes: SimpleChanges): void {
    const { list } = changes;
    if (list) {
      // console.log('list', list.currentValue);
      // this.showList = list.currentValue.slice();
      this.selecteds = this.list.filter(item => item.checked);
    }
  }

  ngOnInit(): void {}

  onInput(event: Event) {
    const { value } = (event.target as HTMLInputElement);
    // this.showList = this.list.filter(item => item.value.includes(value));
    this.filtered.emit(value);
  }

  itemClick(index: number) {
    /* const index = this.targetIndex(target.key);
     if (index > -1) {
       this.selecteds.splice(index, 1);
     } else {
       this.selecteds.push(target);
     }*/
    // this.changed.emit(this.selecteds);
    this.select.emit(index);
  }

  targetIndex(key: string): number {
    return this.selecteds.findIndex(item => item.key === key);
  }
}
