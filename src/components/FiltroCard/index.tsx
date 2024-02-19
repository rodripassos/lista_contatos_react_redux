import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { alterarFiltro } from '../../store/reducer/filtro'

import * as S from './styles'

export type Props = {
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

const FiltroCard = ({ legenda }: Props) => {
  const dispatch = useDispatch()
  const { filtro, contatos } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    const mesmaLegenda = filtro.legenda === legenda

    return mesmaLegenda
  }

  const contarContatos = () => {
    if (legenda === 'Todos') {
      return contatos.itens.length
    } else {
      return contatos.itens.filter((item) => item.legenda === legenda).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        legenda
      })
    )
  }

  const ativo = verificaEstaAtivo()
  const contador = contarContatos()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Label>{legenda}</S.Label>
      <S.Contador>{contador} contato(s)</S.Contador>
    </S.Card>
  )
}

export default FiltroCard
