import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnicornifyMeDirective } from './unicornify-me.directive';
import { UnicornifyClearDirective } from './unicornify-clear.directive';
import { UnicornifyService } from './unicornify.service';

const unicornService = {
  provide: UnicornifyService,
  useValue: new UnicornifyService(),
};

@NgModule({
  imports: [CommonModule],
  declarations: [UnicornifyClearDirective, UnicornifyMeDirective],
  providers: [unicornService],
  exports: [UnicornifyMeDirective, UnicornifyClearDirective],
})
export class UnicornifyModule {}
