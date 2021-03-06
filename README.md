# 🦄 `angular-unicornify`

Easily add 🦄's to your Angular site. Includes two directives and a service for unicornifying your site. The two directives included are `unicornify-me` and `unicornify-clear` and the service is injectable as `UnicornifyService`.

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

```html
<div class="cornify">
  <span class="corns" unicornify-me>🦄</span>
  <span class="corns-clear" unicornify-clear>🗑️</span>
  <span>{{ unicorns.count }}</span>
</div>
```

## Reference

### Use the `unicornify-me` and `unicornify-clear` Directives

The directives are available for use on any element. Spawn unicorns by clicking the element.

```
<button unicornify-me>Click for corns</button>
<button unicornify-clear>Click to clear corns</button>
```

### Use the `UnicornifyService`

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
