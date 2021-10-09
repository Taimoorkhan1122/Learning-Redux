# Redux Store
### one store for the entire application

- Holds appliction state
- Allow access the state via `getState()`
- Allow state to be updated via `dispatch(action)`
- regiser listeners via  `subscribe(listener)`
- handles unregistering of listeners  via the function returned by subscriber.

## Combine Multiple Reducers
`redux.combineReducers()` : Redux provides a method for combining multiple reducers  into a single root reducer. 

## Enhacer (Middlewares)
We can provide a second argument to `createStore()` to provide extended functionality  like third party extension between dispatching and the moment it reaches the reducer.
e.g Redux Thunk, Logger etc  

## Async Actions
We will use redux-thunk middleware for applying async actions.
redux-thunk will allow us to create action creators that instead of returning actions would return a function, using the returned function we can create asynchronous tasks such as http request and other side effects.