const initialState = {
  editItem: "",
  itemList: [],
  editMode: false,
};

const addItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      return {
        ...state,
        itemList: [...state.itemList, action.payload],
      };
    }
    case "CLEAR_LIST": {
      return {
        ...state,
        itemList: [],
      };
    }
    case "DELETE_ITEM": {
      const newItemList = state.itemList.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        itemList: newItemList,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default addItemReducer;
