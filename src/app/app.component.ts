import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hero';
  showModal = false;
  size = 16;
  onClose() {
    this.showModal = false;
  }
  onConfirm() {
    this.showModal = false;
  }

}
