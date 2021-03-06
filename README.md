# 🦄 `angular-unicornify`

Angular ready directives and a service for unicornifying your site. The two directives included are `unicornify-me` and `unicornify-clear` and the service is injectable as `UnicornifyService`.

## Usage

```typescript
import { UnicornifyModule } from "angular-unicornify";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UnicornifyModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```typescript
import { UnicornifyService } from "angular-unicornify";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(readonly unicorns: UnicornifyService) {
  }
}
```

```angular2html
<div class="cornify">
  <span class="corns" unicornify-me>🦄</span>
  <span class="corns-clear" unicornify-clear>🗑️</span>
  <span>{{ unicorns.count }}</span>
</div>
```

## Reference

```ts
export class AppComponent {
  constructor(readonly unicorns: UnicornifyService) {
  }
}
```

- **`add`**_`: () => void`_ - 🦄
- **`remove`**_`: () => void`_ - remove all unicorns
- **`count`**_`: number`_ - how many unicorns?


## 🙌 Credits

Big thanks to:

[__Unicorns & Rainbows On-Demand__](http://www.cornify.com)
[__use-cornify__](https://github.com/daphnesmit/use-cornify)
