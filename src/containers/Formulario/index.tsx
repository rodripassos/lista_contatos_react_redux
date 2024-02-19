import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import $ from 'jquery'
import 'jquery-mask-plugin'

import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form } from './styles'
import { cadastrar } from '../../store/reducer/contatos'

const Formulario = () => {
  $(() => {
    $('#telefone').mask('(00) 00000-0000', {
      placeholder: 'Telefone - (XX) XXXXX-XXXX'
    })
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    if (nome.length > 5 && telefone.length > 10) {
      let legendaAtual = ''
      if (
        nome.toLowerCase().startsWith('a') ||
        nome.toLowerCase().startsWith('b') ||
        nome.toLowerCase().startsWith('c')
      ) {
        legendaAtual = 'A - C'
      } else if (
        nome.toLowerCase().startsWith('d') ||
        nome.toLowerCase().startsWith('e') ||
        nome.toLowerCase().startsWith('f')
      ) {
        legendaAtual = 'D - F'
      } else if (
        nome.toLowerCase().startsWith('g') ||
        nome.toLowerCase().startsWith('h') ||
        nome.toLowerCase().startsWith('i')
      ) {
        legendaAtual = 'G - I'
      } else if (
        nome.toLowerCase().startsWith('j') ||
        nome.toLowerCase().startsWith('k') ||
        nome.toLowerCase().startsWith('l') ||
        nome.toLowerCase().startsWith('m')
      ) {
        legendaAtual = 'J - M'
      } else if (
        nome.toLowerCase().startsWith('n') ||
        nome.toLowerCase().startsWith('o') ||
        nome.toLowerCase().startsWith('p')
      ) {
        legendaAtual = 'N - P'
      } else if (
        nome.toLowerCase().startsWith('q') ||
        nome.toLowerCase().startsWith('r') ||
        nome.toLowerCase().startsWith('s')
      ) {
        legendaAtual = 'Q - S'
      } else if (
        nome.toLowerCase().startsWith('t') ||
        nome.toLowerCase().startsWith('u') ||
        nome.toLowerCase().startsWith('v')
      ) {
        legendaAtual = 'T - V'
      } else if (
        nome.toLowerCase().startsWith('w') ||
        nome.toLowerCase().startsWith('x') ||
        nome.toLowerCase().startsWith('y') ||
        nome.toLowerCase().startsWith('z')
      ) {
        legendaAtual = 'X - Z'
      } else {
        legendaAtual = 'Todos'
      }

      dispatch(
        cadastrar({
          nome,
          telefone,
          email,
          legenda: legendaAtual
        })
      )
      navigate('/')
    } else {
      alert('Insira um contato válido!')
    }
  }

  return (
    <MainContainer>
      <Titulo>Novo contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome Completo"
          id="nome"
          name="nome"
        />
        <Campo
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
          type="text"
          placeholder="Telefone - (DD) 99999-9999"
          inputMode="tel"
          id="telefone"
          name="telefone"
        />
        <Campo
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="text"
          placeholder="E-mail"
          inputMode="email"
          id="email"
          name="email"
        />
        <BotaoSalvar type="submit">Cadastrar Contato</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
