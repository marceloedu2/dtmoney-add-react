import * as S from './styles'
import logoImg from '../../assets/logo.svg'

const Header = () => {
    return (
        <S.Container>
            <S.Content>
            <img src={logoImg} alt="dt modey" />
            <button type="button">
                Nova transação
            </button>
            </S.Content>
        </S.Container>
    );
};

export default Header;
