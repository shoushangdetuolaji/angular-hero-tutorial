import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.scss']
})
export class SizerComponent implements OnInit {
  @Input() size = 16;
  @Output() change = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  inc() {
    this.change.emit(this.size + 1);
  }
  dec() {
    this.change.emit(this.size - 1);
  }

}
