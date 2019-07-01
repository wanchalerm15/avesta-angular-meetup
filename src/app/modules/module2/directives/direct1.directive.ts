import { Directive, Input, HostListener, HostBinding, OnInit, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appDirect1]'
})
export class Direct1Directive implements AfterViewInit {
  private oldText: string;

  @Input('appDirect1')
  public appDirect1: string;

  @HostBinding('style.color') txColor: string;

  constructor(private _elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.oldText = this.getElement.innerText;
  }

  @HostListener('mouseover')
  onmouseover() {
    this.getElement.innerText = `${this.oldText} => ${this.appDirect1}`;
    this.txColor = 'red';
  }

  @HostListener('mouseout')
  onmouseout() {
    this.getElement.innerText = this.oldText;
    this.txColor = null;
  }


  get getElement() {
    if (this._elementRef.nativeElement) {
      return this._elementRef.nativeElement as HTMLElement;
    }
    return {} as HTMLElement;
  }
}
