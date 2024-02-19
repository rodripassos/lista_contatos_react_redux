import { configureStore } from '@reduxjs/toolkit'
import contatosReducer from './reducer/contatos'
import filtroReducer from './reducer/filtro'

const store = configureStore({
  reducer: {
    contatos: contatosReducer,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
