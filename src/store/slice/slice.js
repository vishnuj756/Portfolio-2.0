import {  createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Slice for managing cart state
export const AddCart = createSlice({
  name: "cart",
  initialState: {
    list: [],
    error: null,
    updatelistdata: null,

    // Track any errors
  },

  reducers: {
    fetchListSuccess: (state, action) => {
      state.status = "succeeded"; // Set succeeded status
      state.list = action.payload; // Update the list with fetched data
    },
    fetchListFailure: (state, action) => {
      state.status = "failed"; // Set failed status
      state.error = action.payload; // Capture the error
    },
    appendSuccess: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    updateSuccess: (state, action) => {
      state.updatelistdata = action.payload;
      console.log("update list ", "");
      const index = state.list.findIndex(
        (item) => item.name === state.updatelistdata.name
      );
      if (index !== -1) {
        state.list[index] = action.payload;
      } else {
        alert("please dont change name");
      }
    },
    deleteSuccess: (state, action) => {
      const deleteIndex = action.payload;
      state.list.splice(deleteIndex, 1); // Remove the item at deleteIndex
        console.log("Item deleted at index:", deleteIndex);
    },
  },
});

export const {
  fetchListSuccess,
  fetchListFailure,
  appendSuccess,
  updateSuccess,
  deleteSuccess,
} = AddCart.actions;

export const getList = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch(fetchListSuccess(response.data));
    console.log("data for testing ", response);
  } catch (error) {
    dispatch(fetchListFailure(error.response?.data || error.message)); // Dispatch failure with error
  }
};
export const addNew = (data) => async (dispatch) => {
  try {
    dispatch(appendSuccess(data));
  } catch (error) {
    dispatch(fetchListFailure(error.response?.data || error.message)); // Dispatch failure with error
  }
};
export const Update = (data) => async (dispatch) => {
  try {
    dispatch(updateSuccess(data));
  } catch (error) {
    dispatch(fetchListFailure(error.response?.data || error.message)); // Dispatch failure with error
  }
};
export const Delete = (data) => async (dispatch) => {
  try {
    dispatch(deleteSuccess(data));

  } catch (error) {
    dispatch(fetchListFailure(error.response?.data || error.message)); // Dispatch failure with error
  }
};

export default AddCart.reducer;
