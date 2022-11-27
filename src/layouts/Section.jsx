import { Media } from '../styles';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Section = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

const StyledSection = styled.div`
  padding: 30px 180px 30px 180px;
  @media ${Media.tablet} {
    padding: 30px 90px 30px 90px;
  }
  @media ${Media.mobile_lg} {
    padding: 30px;
  }
`;

export default Section;
