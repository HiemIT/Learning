import userApi from '../../api/userApi';
import StorageKeys from '../../constants/storage-keys';
const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const register = createAsyncThunk('user/register', async (payload) => {
  // call api to register
  const date = await userApi.required(payload);

  // save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, date.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(date.user));

  // return user data
  return date.user;
});

export const login = createAsyncThunk('user/login', async (payload) => {
  // call api to register
  const date = await userApi.login(payload);

  // save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, date.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(date.user));

  // return user data
  return date.user;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    settings: {},
  },
  reducers: {
    logout(state) {
      // remove local
      localStorage.removeItem(StorageKeys.USER);
      localStorage.removeItem(StorageKeys.TOKEN);

      // update state
      state.current = {};
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer; // default export
