import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Input() show = false;
  @Input() title = '';
  @Input() confirmLabel = '确定';
  @Input() cancelLabel = '取消';
  @Output() close = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    this.close.emit()
  }

}
