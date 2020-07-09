import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
  ContentChild
} from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { AccordionContentLazyDirective } from '../accordion-content-lazy.directive';

@Component({
  selector: 'accordion-content',
  templateUrl: './accordion-content.component.html',
  styleUrls: ['./accordion-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ height: '0px' }),
        animate('200ms', style({ height: '*' }))
      ]),
      transition(':leave', [
        style({ height: '*' }),
        animate('200ms', style({ height: '0px' }))
      ])
    ])
  ]
})
export class AccordionContentComponent {
  @ContentChild(AccordionContentLazyDirective, { static: true })
  lazyContent!: AccordionContentLazyDirective;
  _isOpen = false;

  @Input()
  set isOpen(value: boolean) {
    if (this._isOpen !== value) {
      this._isOpen = value;
      this.cdr.markForCheck();
    }
  }

  get isOpen(): boolean {
    return this._isOpen;
  }

  constructor(private cdr: ChangeDetectorRef) {}
}
