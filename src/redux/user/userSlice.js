import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      let newCart = [...state.cart];

      const found = state.cart.find((item) => item.id === payload.id);

      if (found) {
        newCart = newCart.map((item) => {
          return item.id === payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      } else {
        newCart.push({ ...payload, quantity: 1 });
      }
      state.cart = newCart;
    },
    removeItem: (state, { payload }) => {
      let newCart = [...state.cart];
      const foundIndex = newCart.findIndex((item) => item.id === payload);
      if (foundIndex !== -1) {
        newCart[foundIndex].quantity -= 1;
      }
      if (newCart[foundIndex].quantity <= 0) {
        newCart.splice(foundIndex, 1);
      }
      state.cart = newCart;
    },
    deleteItem: (state, { payload }) => {
      let newCart = [...state.cart];
      console.log(typeof payload);
      state.cart = newCart.filter((item) => item.id !== payload);
    },
  },
});

export const { addItem, removeItem, deleteItem } = userSlice.actions;

export default userSlice.reducer;
