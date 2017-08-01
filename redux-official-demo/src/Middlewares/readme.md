# middleware

http://redux.js.org/docs/api/applyMiddleware.html#tips

> If you want to conditionally apply a middleware, make sure to only import it when it's needed:

```jsx

let middleware = [a, b];
if (process.env.NODE_ENV !== 'production') {
    let c = require('some-debug-middleware');
    let d = require('another-debug-middleware');
    middleware = [...middleware, c, d];
}

const store = createStore(
    reducer,
    preloadedState,
    applyMiddleware(...middleware)
);

```



## Custom Logger Middleware





## Using Thunk Middleware for Async Actions











