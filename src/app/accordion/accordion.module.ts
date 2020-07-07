import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionComponent } from './accordion.component';
import { AccordionHeaderComponent } from './accordion-header/accordion-header.component';
import { AccordionContentComponent } from './accordion-content/accordion-content.component';
import { AccordionGroupComponent } from './accordion-group/accordion-group.component';

@NgModule({
  declarations: [AccordionComponent, AccordionHeaderComponent, AccordionContentComponent, AccordionGroupComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AccordionComponent
  ]
})
export class AccordionModule { }
