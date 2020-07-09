import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccordionModule } from './accordion/accordion.module';
import { IconComponent } from './icon/icon.component';

@NgModule({
  declarations: [AppComponent, IconComponent],
  imports: [BrowserModule, AccordionModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
