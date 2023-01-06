import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { basicHighlight } from './basic-highlight/basicHighlight.directive';
import { BetterhighlightDirective } from './betterhighlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    basicHighlight,
    BetterhighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
