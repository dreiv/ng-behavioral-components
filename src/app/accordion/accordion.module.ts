import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccordionComponent } from './accordion.component';
import { AccordionHeaderComponent } from './accordion-header/accordion-header.component';
import { AccordionContentComponent } from './accordion-content/accordion-content.component';
import { AccordionGroupComponent } from './accordion-group/accordion-group.component';
import { AccordionContentLazyDirective } from './accordion-content-lazy.directive';

@NgModule({
  declarations: [
    AccordionComponent,
    AccordionHeaderComponent,
    AccordionContentComponent,
    AccordionGroupComponent,
    AccordionContentLazyDirective
  ],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [
    AccordionComponent,
    AccordionHeaderComponent,
    AccordionContentComponent,
    AccordionGroupComponent,
    AccordionContentLazyDirective
  ]
})
export class AccordionModule {}
