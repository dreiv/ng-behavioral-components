import {
  Component,
  ChangeDetectionStrategy,
  ContentChildren,
  QueryList,
  AfterContentInit,
  OnDestroy
} from '@angular/core';
import { AccordionGroupComponent } from './accordion-group/accordion-group.component';

import { merge, Subject } from 'rxjs';
import { mapTo, startWith, switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'accordion',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent implements AfterContentInit, OnDestroy {
  @ContentChildren(AccordionGroupComponent)
  groups!: QueryList<AccordionGroupComponent>;
  private unsubscribe$ = new Subject<void>();

  ngAfterContentInit(): void {
    this.groups.changes
      .pipe(
        startWith(this.groups),
        switchMap((groups: QueryList<AccordionGroupComponent>) =>
          merge(
            ...groups.map((group) => group.header.click$.pipe(mapTo(group)))
          )
        ),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((group) => {
        group.toggle();
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }
}
