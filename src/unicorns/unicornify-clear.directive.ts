import { Directive, HostListener, OnInit } from '@angular/core';
import { UnicornifyService } from './unicornify.service';

@Directive({
  selector: '[unicornify-clear]',
})
export class UnicornifyClearDirective implements OnInit {
  constructor(private readonly cornify: UnicornifyService) {}

  ngOnInit(): void {
    this.cornify.remove();
  }

  @HostListener('click', ['$event'])
  clear() {
    this.cornify.remove();
  }
}
