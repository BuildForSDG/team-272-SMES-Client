import { Directive, HostBinding, Input, Output, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { fromEvent } from 'rxjs';

@Directive({
  selector: '[appOpenSidebarOnswipe]'
})
export class OpenSidebarOnSwipeDirective {
  @HostBinding('style.width') width;
  @Input('sideNav') set sideNav(sideNav: MatSidenav){
     this.sidebar = sideNav;
  }
  @Output() setWidth: EventEmitter<number> = new EventEmitter<number>();
  ngAfterViewInit(){
     this.setWidth.emit(80);
     this.startOnTouch();
  }
  startOnTouch(){
     fromEvent(document, 'touchstart').pipe(
     tap((e: TouchEvent) => e.touches[0].clientX <=20 && e.touches[0].clientY >= 65 ? (this.sidebar.open(),
        this.setWidth.emit (e.touches[0].clientX)) : '' )
      ).subscribe();
     }
   }
