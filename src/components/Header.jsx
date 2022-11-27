import { Media } from '../styles';
import styled from '@emotion/styled';

const Header = () => {
  return (
    <HeaderSection>
      <HeaderContainer>
        <p>MY TODOLIST</p>
        <p>REACT</p>
      </HeaderContainer>
    </HeaderSection>
  );
};

const HeaderSection = styled.div`
  padding: 18px 180px 8px 180px;
  @media ${Media.tablet} {
    padding: 18px 90px 8px 90px;
  }
  @media ${Media.mobile_lg} {
    padding: 18px 30px 8px 30px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & > p {
    font-weight: 700;
  }
`;

export default Header;
