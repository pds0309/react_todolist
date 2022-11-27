import { Border, Colors } from '../styles';

import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Button = ({ children, btnType, btnColor, onClick }) => {
  return (
    <StyledButton btnType={btnType} btnColor={btnColor} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  btnType: PropTypes.oneOf(['primary', 'secondary']),
  btnColor: PropTypes.oneOf(['brand', 'warning', 'success']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  btnType: 'primary',
  btnColor: 'brand',
};

const StyledButton = styled.button`
  padding: 9px 25px 9px 25px;
  cursor: pointer;
  font-weight: 700;
  border-radius: ${Border.elementRadius};
  border: 2px solid ${props => Colors[props.btnColor]};
  color: ${props => (props.btnType === 'primary' ? 'white' : Colors.black)};
  background-color: ${props =>
    props.btnType === 'primary' ? Colors[props.btnColor] : 'transparent'};
  :hover {
    opacity: 0.8;
  }
`;

export default Button;
