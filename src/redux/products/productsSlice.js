import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const { data } = await axios(`${BASE_URL}/products`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getProductsByQuery = createAsyncThunk(
  "products/getProductsByQuery",
  async (queryText) => {
    try {
      const { data } = await axios(`${BASE_URL}/products/?title=${queryText}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
const initialState = {
  list: [],
  filtered: [],
  isLoading: false,
  searchList: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filteredByPrice: (state, { payload }) => {
      state.filtered = state.list.filter((item) => item.price < payload);
    },
    clearListSearch: (state) => {
      state.searchList = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.list = payload;
      state.isLoading = false;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false;
    });
    //getProductsByQuery
    builder.addCase(getProductsByQuery.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProductsByQuery.fulfilled, (state, { payload }) => {
      state.searchList = payload;
      state.isLoading = false;
    });
    builder.addCase(getProductsByQuery.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { filteredByPrice, clearListSearch } = productsSlice.actions;

export default productsSlice.reducer;
