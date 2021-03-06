import { Directive, HostListener } from '@angular/core';
import { UnicornifyService } from './unicornify.service';

@Directive({
  selector: '[unicornify-me]',
})
export class UnicornifyMeDirective {
  constructor(private readonly cornify: UnicornifyService) {}

  @HostListener('click', ['$event'])
  async add() {
    this.cornify.add();
  }
}
