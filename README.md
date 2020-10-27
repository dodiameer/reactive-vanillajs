# Reactive Vanilla JS

This is a framework-agnostic library for implementing reactive, Svelte store-like data stores, that can be used anywhere to store global-state, business-logic, caching API requests, etc... Anything you need to store, can be stored.

## Usage

- In a Javascript/Typescript file, export a `reactiveStore(value)`, where `value` is the initial store value. It can be a default or named export.
- In another file, import your store.
- Use `store.subscribe(callback)`, where `callback` is a function that takes the current value. Make sure to store the returned callback in a variable (`const unsubscribe = store.subscribe(callback)`) so you can call it later to remove the subscription and prevent memory leaks

## Setting and updating value

- Use `store.set(value)` to set a value directly
- Use `store.update(callback)` to return a new value based on the current one. Callback is a function that takes the current value and returns a value.

## Additional features

- In `store.subscribe`, in addition the the callback, you may pass an option with below properties:

```javascript
{
    // If false, will not run the callback until the value changes. Default value: true
    runOnSubscription?: boolean
}
```
