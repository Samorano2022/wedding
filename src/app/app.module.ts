import { BrowserModule } from '@angular/platform-browser';
import { ClipboardModule } from 'ngx-clipboard';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GiftComponent } from './gift/gift.component';

@NgModule({
  declarations: [],
  imports: [BrowserModule, ClipboardModule, FormsModule],
  providers: [],
  bootstrap: []
})
export class AppModule {}