import * as S from './styles'
const TransactionTable = () => {
  return (
    <S.Container>
      <table>
        <thead>
          <th>Titulo</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td>R$ 10.000</td>
            <td>Desenvolvimento</td>
            <td>10/10/10</td>
          </tr>
          <tr>
            <td>Desenvolvimento de site</td>
            <td>R$ 10.000</td>
            <td>Desenvolvimento</td>
            <td>10/10/10</td>
          </tr>
          <tr>
            <td>Desenvolvimento de site</td>
            <td>R$ 10.000</td>
            <td>Desenvolvimento</td>
            <td>10/10/10</td>
          </tr>
        </tbody>
      </table>
    </S.Container>
  )
}

export default TransactionTable
