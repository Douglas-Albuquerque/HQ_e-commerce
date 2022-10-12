import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    isLogged: false,
    title: undefined,
    price: undefined,
    image: undefined,

  },
  reducers: {
    dataCard(state, { payload }) {
      return { ...state, isLogged: true, name: payload }
    },
    setTitle(state, { payload }) {
      return { ...state, title: payload }
    },
    setPrice(state, { payload }) {
      return { ...state, price: payload }
    },
    setImage(state, { payload }) {
      return { ...state, image: payload }
    },
  }
})

export const { dataCard, setTitle, setPrice, setImage } = slice.actions

export const selectUser = state => state.user

export default slice.reducer