// reducers (departments)

const claimHistory = (oldListOfClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    // this reducer cares about this action object

    const newList = [...oldListOfClaims, action.payload];
    return newList;
  }

  // we don't really care // return oldListOfClaims
  return oldListOfClaims;
};

const accounting = (cashAvailable = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    return cashAvailable - action.payload.amount;
  } else if (action.type === "CREATE_POLICY") {
    return cashAvailable + action.payload.amount;
  }

  return cashAvailable;
};

const policy = (policyList = [], action) => {
  if (action.type === "CREATE_POLICY") {
    const newList = [...policyList, action.payload];
    return newList;
  } else if (action.type === "DELETE_POLICY") {
    const reducedList = policyList.filter(
      (pol) => pol.name !== action.payload.name
    );
    return reducedList;
  }

  return policyList;
};

module.exports = { policy, accounting, claimHistory };
