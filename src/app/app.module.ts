import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteinfoComponent } from './quoteinfo/quoteinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteinfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
