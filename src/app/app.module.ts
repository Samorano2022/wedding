import { BrowserModule } from '@angular/platform-browser';
import { ClipboardModule } from 'ngx-clipboard';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GiftComponent } from './gift/gift.component';
import { WeddingCountdownComponent } from './wedding-countdown/wedding-countdown.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ WeddingCountdownComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: []
})
export class AppModule {
}