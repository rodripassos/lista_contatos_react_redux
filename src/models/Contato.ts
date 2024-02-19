class Contato {
  nome: string
  telefone: string
  email: string
  id: number
  legenda?: string

  constructor(
    nome: string,
    telefone: string,
    email: string,
    id: number,
    legenda: string
  ) {
    this.nome = nome
    this.telefone = telefone
    this.email = email
    this.id = id
    this.legenda = legenda
  }
}

export default Contato
