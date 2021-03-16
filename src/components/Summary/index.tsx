import * as S from './styles'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

const Summary = () => {
  return (
    <S.Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$100,00</strong>
      </div>
      <div>
        <header>
          <p>Saída</p>
          <img src={outcomeImg} alt="Saída" />
        </header>
        <strong>R$100,00</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$100,00</strong>
      </div>
    </S.Container>
  )
}

export default Summary
