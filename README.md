# react-mousetrap-hook
React hook for using keyboard shortcuts in components.
This is a hook version for the [mousetrap] package.

<!--
### Documentation and live example

https://johannesklauss.github.io/react-hotkeys-hook/

-->
### Installation

```shell
npm install react-mousetrap-hook
```

or

```shell
yarn add react-mouserap-hook
```

Make sure that you have at least version 16.8 of `react` and `react-dom` installed, or otherwise hooks won't work for you.

### Usage
With TypeScript
```typescript jsx
import { useMousetrap } from 'react-mousetrap-hook';

export const ExampleComponent: React.FC = () => {
  const [count, setCount] = useState(0);
  useMousetrap('ctrl+k', () => setCount(prevCount => prevCount + 1));

  return (
    <p>
      Pressed {count} times.
    </p>
  );
};
```

Or plain JS:
```js
export const ExampleComponent = () => {
  const [count, setCount] = useState(0);
  useMousetrap('ctrl+k', () => setCount(prevCount => prevCount + 1));
    
  return (
    <p>
      Pressed {count} times.
    </p>
  );
};
```

The hook takes care of all the binding and unbinding for you.
As soon as the component mounts into the DOM, the key stroke will be
listened to. When the component unmounts it will stop listening.

### Call Signature

```typescript
useMousetrap(keys: string, callback: (event: KeyboardEvent, handler: HotkeysEvent) => void, deps: any[] = [])
```

The `useMousetrap` hook follows the [mousetrap] call signature.
The callback function takes the exact parameters as the callback function in the hotkeys package.
See [mousetrap] documentation for more info or look into the typings file.

### Parameters
- `keys: string`: Here you can set the key strokes you want the hook to listen to. You can use single or multiple keys,
modifier combination, etc. See [this](https://craig.is/killing/mice)
section on the mousetrap documentation for more info.
- `callback: (event: KeyboardEvent, handler: MousetrapEvent) => void`: Gets executed when the defined keystroke
gets hit by the user. **Important:** Since version 1.5.0 this callback gets memoised inside the hook. So you don't have
to do this anymore by yourself.
- `deps: any[] = []`: The dependency array that gets appended to the memoisation of the callback. Here you define the inner
dependencies of your callback. If for example your callback actions depend on a referentially unstable value or a value
that will change over time, you should add this value to your deps array. Since most of the time your callback won't
depend on any unstable callbacks or changing values over time you can leave this value alone since it will be set to an
empty array by default. See the [Memoisation](#memoisation) section to
learn more and see an example where you have to set this array.

### Found an issue or have a feature request?

Open up an issue or pull request and participate.

### Local Development

Checkout this repo, run `yarn` or `npm i` and then run the `docz:dev` script.
You can use the `docs/useMousetrap.mdx` to test the behavior of the hook. It directly imports the
`src/index.ts` file and transpiles it automatically. So you don't have to worry about. For more info
on .mdx files, check out the docz documentation: https://www.docz.site/docs/writing-mdx

### Fork Notice

This project was forked from JohannesKlauss/react-hotkeys-hook.

It was forked because even though hotkeys.js is more up-to-date than mousetrap.js, it does not currently support sequential key combinations.

---

MIT License.

---

[mousetrap]: https://github.com/ccampbell/mousetrap
