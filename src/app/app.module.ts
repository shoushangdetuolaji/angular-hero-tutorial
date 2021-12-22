import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogComponent } from './demos/components/dialog/dialog.component';
import { SizerComponent } from './demos/components/sizer/sizer.component';
import {FormsModule} from "@angular/forms";
import {TransferPanelComponent} from './demos/components/transfer/transfer-panel/transfer-panel.component';
import { TransferComponent } from './demos/components/transfer/transfer.component';
import { AlertComponent } from './demos/components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    SizerComponent,
    TransferPanelComponent,
    TransferComponent,
    AlertComponent
  ],
  entryComponents: [AlertComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
