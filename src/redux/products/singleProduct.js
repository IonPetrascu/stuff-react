import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants";
import axios from "axios";

export const getSingleProduct = createAsyncThunk(
  "products/getSingleProduct",
  async (id) => {
    try {
      const { data } = await axios(`${BASE_URL}/products/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);


const initialState = {
  product: null,
  isLoading: false,
};

export const singleProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSingleProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSingleProduct.fulfilled, (state, { payload }) => {
      state.product = payload;
      state.isLoading = false;
    });
    builder.addCase(getSingleProduct.rejected, (state) => {
      state.isLoading = false;
      state.product = null;
    });
   
  },
});

//export const {} = singleProductSlice.actions;

export default singleProductSlice.reducer;
