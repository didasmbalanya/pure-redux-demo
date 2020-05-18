# pure-redux-demo
A simple node app to show how redux works on its own

1. Action creators - functions that returns actions
2. Actions - object with type and payload. Type simply definies which reducer will handle that payload to update the store.
3. Reducers. functions that take in actions and run logic to update the store.
4. Dispatch. A store method that takes the action as a param and passes it to the reducer which as mentioned above will update the store.

Run yarn dev to see the results