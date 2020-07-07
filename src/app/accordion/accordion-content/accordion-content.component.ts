import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'accordion-content',
  templateUrl: './accordion-content.component.html',
  styleUrls: ['./accordion-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionContentComponent {
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
