import * as S from './styles'
import Summary from '../Summary'
import TransactionTable from '../TransactionsTable'

const Dashboard = () => {
  return (
    <S.Container>
      <Summary />
      <TransactionTable />
    </S.Container>
  )
}

export default Dashboard
