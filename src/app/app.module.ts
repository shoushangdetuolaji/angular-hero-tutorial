import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { SizerComponent } from './components/sizer/sizer.component';
import {FormsModule} from "@angular/forms";
import { TransferPanelComponent } from './components/transfer-panel/transfer-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    SizerComponent,
    TransferPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
