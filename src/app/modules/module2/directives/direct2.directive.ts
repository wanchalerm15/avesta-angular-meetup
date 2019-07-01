import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDirect2]'
})
export class Direct2Directive {
  @Output('appDirect2')
  public onEnter = new EventEmitter<string>();

  constructor() { }

  @HostListener('keypress', ['$event'])
  onkeypress(ev: KeyboardEvent) {
    if (ev.key != 'Enter') return;
    this.onEnter.emit();
  }
}
