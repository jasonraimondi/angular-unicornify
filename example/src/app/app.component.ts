import { Component } from '@angular/core';
import { UnicornifyService } from "../../../src";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(readonly unicorns: UnicornifyService) {
  }
}
