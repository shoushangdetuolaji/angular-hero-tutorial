import {Component, NgModule, ViewChild, OnInit} from '@angular/core';
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hero';
  showModal = false;
  size = 16;
  inFormVal = '';
  expandVal = '';
  inputVal = '';
  name: string | null = '';
  onClose() {
    this.showModal = false;
  }
  onConfirm() {
    this.showModal = false;
  }
  constructor() {

  }
  ngOnInit():void {
    const heroName: string = this.name!;
  }

}
