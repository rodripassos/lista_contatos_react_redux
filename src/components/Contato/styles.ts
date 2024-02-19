import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    'nome email telefone'
    'barra barra barra';
  grid-gap: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Nome = styled.input`
  font-size: 24px;
  font-weight: bold;
  padding: 4px;
  border: none;
  grid-area: nome;
`

export const Email = styled.input`
  font-size: 16px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  padding: 4px;
  border: none;
  grid-area: email;
`

export const Telefone = styled.input`
  font-size: 20px;
  line-height: 24px;
  padding: 4px;
  border: none;
  grid-area: telefone;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
  margin-top: 16px;
  grid-area: barra;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
