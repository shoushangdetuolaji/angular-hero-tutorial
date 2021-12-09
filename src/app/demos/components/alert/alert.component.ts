import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

type AlertTheme = 'primary' | 'warning' | 'danger';
export interface AlertOption {
  content: string;
  theme?: AlertTheme;
}

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styles: [`
    .close {
      display: block;
      width: 20px;
      height: 20px;
      position: absolute;
      right: 10px;
      top: 50%;
      margin-top: -10px;
      cursor: pointer;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent implements OnInit {
  options: Required<AlertOption> = {
    content: '',
    theme: 'primary'
  }
  constructor() { }

  ngOnInit(): void {
  }

  get wrapClis(): string {
    return `alert alert-primary fixed-top`;
  }

}
