console.clear();
console.log("running");
const Redux = require("redux");
const { createClaim, createPolicy, deletePolicy } = require("./actionCreators");
const { policy, accounting, claimHistory } = require("./reducers");
const { combineReducers, createStore } = Redux;

const departments = combineReducers({
  policy,
  accounting,
  claimHistory,
});
const store = createStore(departments);
console.log("store", store.getState());

store.dispatch(createPolicy("Joe", 100));
store.dispatch(createPolicy("Jim", 20));
store.dispatch(createPolicy("Bob", 30));
store.dispatch(createClaim("didas", 30));
store.dispatch(deletePolicy("Bob"))
console.log("store", store.getState()); // result below

// store { policy:
//   [ { name: 'Joe', amount: 100 }, { name: 'Jim', amount: 20 } ],
//  accounting: 220,
//  claimHistory: [ { name: 'didas', amount: 30 } ] }
