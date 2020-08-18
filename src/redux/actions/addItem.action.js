import { v4 as getId } from "uuid";

export const addItem = (item) => {
    return {
        type: "ADD_ITEM",
        payload: {
            itemDescription: item,
            id: getId(),
        },
    };
};