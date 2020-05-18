console.clear();
console.log("running \n");

// action creator == someone dropping off a policy
// functions that return actions
// action - object with type and payload property to be handled by reducers

const createPolicy = (name, amount) => ({
  type: "CREATE_POLICY",
  payload: {
    name,
    amount,
  },
});

const deletePolicy = (name) => ({ type: "DELETE_POLICY", payload: { name } });

//
const createClaim = (name, amount) => ({
  type: "CREATE_CLAIM",
  payload: { name, amount },
});

module.exports = { createClaim, createPolicy, deletePolicy };
