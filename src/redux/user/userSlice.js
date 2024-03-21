import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

export const createUser = createAsyncThunk(
  "user/createUser",
  async (payload) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/users/`, payload);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (payload) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/auth/login`, payload);
      const login = await axios.get(`${BASE_URL}/auth/profile`, {
        headers: { Authorization: `Bearer ${data.access_token}` },
      });

      return login.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const updateUser = createAsyncThunk("user/updateUser", async (payload) => {
  try {
    const { data } = await axios.put(`${BASE_URL}/users/${payload.id}`,payload);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  currentUser: null,
  cart: [],
  isLoading: false,
  showForm: false,
  typeForm: "signup",
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
    toggleForm: (state, { payload }) => {
      state.showForm = payload;
    },
    toggleTypeForm: (state, { payload }) => {
      state.typeForm = payload;
    },
    resetCart:(state)=>{
      state.cart = []
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, { payload }) => {
      state.currentUser = payload;
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.currentUser = payload;
    });
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      state.currentUser = payload;
    });
  },
});

export const { addItem,resetCart, removeItem, deleteItem, toggleTypeForm, toggleForm } =
  userSlice.actions;

export default userSlice.reducer;
