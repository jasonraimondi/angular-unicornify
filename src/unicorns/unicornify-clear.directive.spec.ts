import 'zone.js/dist/zone';
import 'zone.js/dist/zone-testing';

import {
  ComponentFixture,
  TestBed,
  TestBedStatic,
} from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { UnicornifyModule } from './unicornify.module';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

// import { UnicornifyService } from "./unicornify.service";

@Component({
  template: `
    <span unicornify-me>🦄</span>
  `,
})
class TestHoverFocusComponent {}

describe('Directive: HoverFocus', () => {
  // let component: TestHoverFocusComponent;
  let fixture: ComponentFixture<TestHoverFocusComponent>;
  let inputEl: DebugElement;
  let module: TestBedStatic;

  beforeEach(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
    module = TestBed.configureTestingModule({
      imports: [UnicornifyModule],
      declarations: [TestHoverFocusComponent],
    });

    fixture = TestBed.createComponent(TestHoverFocusComponent);
    // const component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('span'));

    console.log(inputEl, module);
  });

  it('click should add unicorn', () => {
    // const service = module.inject(UnicornifyService);
    // expect(service.count).toBe(0);
    // inputEl.triggerEventHandler('click', null);
    // expect(service.count).toBe(1);
  });
});
