import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue, getSelectedOption, getSelectWidth } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  
  const selectWidth = getSelectWidth(getSelectedOption(value, children));

  return (
    <Wrapper value={value} onChange={onChange} style={{width: `${selectWidth}px`}}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.select`
  display: block;
  font-family: 'Roboto', sans-serif;
  font-size: ${16 / 16}rem;
  color: ${COLORS.gray700};
  padding: 12px 24px 12px 12px;
  box-sizing: border-box;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  border: 1px solid transparent;
  transition: all 0.3s;
  
  &:focus {
    outline: 2px solid;
  }
  
  &:hover {
    color: black;
  }
`;

export default Select;
