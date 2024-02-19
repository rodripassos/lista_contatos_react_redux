import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Rodrigo',
      telefone: '(11)98160-9999',
      email: 'rodrigo@gmail.com',
      legenda: 'Q - S'
    },
    {
      id: 2,
      nome: 'Melissa',
      telefone: '(11)99999-9999',
      email: 'melissa@gmail.com',
      legenda: 'J - M'
    },
    {
      id: 3,
      nome: 'Francisco',
      telefone: '(11)94444-9999',
      email: 'francisco@gmail.com',
      legenda: 'D - F'
    },
    {
      id: 4,
      nome: 'Olavo',
      telefone: '(11)98888-9999',
      email: 'olavo@gmail.com',
      legenda: 'N - P'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Já existe um contato com esse nome!')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
