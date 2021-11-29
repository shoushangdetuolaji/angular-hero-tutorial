import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogComponent } from './demos/components/dialog/dialog.component';
import { SizerComponent } from './demos/components/sizer/sizer.component';
import {FormsModule} from "@angular/forms";
import { TransferPanelComponent } from './demos/components/transfer-panel/transfer-panel.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HerosComponent } from './pages/heros/heros.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    SizerComponent,
    TransferPanelComponent,
    LayoutComponent,
    HerosComponent
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
