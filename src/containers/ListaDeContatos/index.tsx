import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { MainContainer, Titulo } from '../../styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, legenda } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    let contatosFiltrados = itens

    if (termo) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )
    }

    if (legenda !== 'Todos') {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.legenda === legenda
      )
    }
    return contatosFiltrados
  }

  const contatos = filtraContatos()

  return (
    <MainContainer>
      <Titulo as="p">
        {' '}
        {contatos.length} contato&#40;s&#41; encontrado&#40;s&#41; como:{' '}
        {`"${legenda}"`}{' '}
        {termo !== undefined && termo?.length > 0
          ? `e que
        contém o termo "${termo}"`
          : ''}
      </Titulo>
      <ul>
        {contatos.map((c) => (
          <li key={c.id}>
            <Contato
              id={c.id}
              nome={c.nome}
              telefone={c.telefone}
              email={c.email}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
