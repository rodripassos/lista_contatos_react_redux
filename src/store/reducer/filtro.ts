import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type FiltroState = {
  termo?: string
  legenda:
    | 'A - C'
    | 'D - F'
    | 'G - I'
    | 'J - M'
    | 'N - P'
    | 'Q - S'
    | 'T - V'
    | 'X - Z'
    | 'Todos'
}

const initialState: FiltroState = {
  termo: '',
  legenda: 'Todos'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.legenda = action.payload.legenda
    }
  }
})

export const { alteraTermo, alterarFiltro } = filtroSlice.actions

export default filtroSlice.reducer
