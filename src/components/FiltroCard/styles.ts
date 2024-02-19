import styled from 'styled-components'

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 2px solid ${(props) => (props.ativo ? '#d63031' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#fad390' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#d63031' : '#5e5e5e')};
  ${(props) => (props.ativo ? 'border-right: none;' : '#5e5e5e')};
  border-radius: 16px 0 0 16px;
  text-align: center;
  box-shadow: ${(props) =>
    props.ativo
      ? '0px 8px 0px rgba(0, 0, 0, 0.5)'
      : '0px 4px 4px rgba(0, 0, 0, 0.25)'};
`

export const Contador = styled.span`
  font-size: 14px;
  display: block;
`

export const Label = styled.span`
  font-size: 24px;
  font-weight: bold;
`
