import { produce } from "immer";

const schemaData = {
  first_name: "First Name ",
  last_name: " Last Name ",
  gender: " Gender ",
  age: " Age ",
  account_name: " Account Name ",
  city: " City ",
  state: " State ",
};

export const initialState = {
  addedSchemas: {},
  nonAddedSchemas: schemaData,
  schemaList: schemaData,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "addNewSchema": {
      return produce(state, (draft) => {
        draft.addedSchemas[action.payload] = draft.schemaList[action.payload];
        setnonAddedSchemas(draft);
      });
    }
    case "removeAddedSchema": {
      return produce(state, (draft) => {
        delete draft.addedSchemas[action.payload];
        setnonAddedSchemas(draft);
      });
    }
    case "changeSchema": {
      return produce(state, (draft) => {
        draft.addedSchemas[action.payload.add] =
          draft.schemaList[action.payload.add];
        delete draft.addedSchemas[action.payload.remove];
        setnonAddedSchemas(draft);
      });
    }
  }
  function setnonAddedSchemas(draft) {
    draft.nonAddedSchemas = { ...draft.schemaList };
    for (let keyName in draft.addedSchemas)
      delete draft.nonAddedSchemas[keyName];
  }
};
