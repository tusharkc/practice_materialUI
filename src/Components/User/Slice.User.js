import { createSlice } from "@reduxjs/toolkit";

export const userReducer = createSlice({
  name: "user",
  initialState: {
    firstName: "",
    lastName: "",
    isMarried: "",
    dateOfBirth: "",
    hasCar: "",
    hasBike: "",
    hasBoat: ""
  },

  reducers: {
    addUser: (state, action) => {
      state.firstName = action.payload;
      state.lastName = action.payload;
      state.dateOfBirth = action.payload;
      state.isMarried = action.payload;
      state.hasCar = action.payload;
      state.hasBike = action.payload;
      state.hasBoat = action.payload;
    },
  },
});

export const { addUser } = userReducer.actions;
export const selectUserFirstName = (state) => state.users.firstName;
export const selectUserLastName = (state) => state.users.lastName;
export const selectUserDateOfBirth = (state) => state.users.dateOfBirth;
export const selectUserIsMarried = (state) => state.users.isMarried;
export const selectUserHasBike = (state) => state.users.hasBike;
export const selectUserHasCar = (state) => state.users.hasCar;
export const selectUserHasBoat = (state) => state.users.hasBoat;

export default userReducer.reducer;
