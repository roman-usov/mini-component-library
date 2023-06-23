import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue, getSelectedOption, getSelectWidth } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  
  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>

      <PresentationLayer>
        {displayedValue}
        <IconWrapper style={{ '--size': 24 + 'px' }}><Icon id="chevron-down" strokeWidth={2} size={24}/></IconWrapper>
      </PresentationLayer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  appearance: none;
`;

const PresentationLayer = styled.div`
  padding: 12px 52px 12px 16px;
  font-size: ${16 / 16}rem;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};
  
  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 2px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
   color: black; 
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  width: var(--size);
  height: var(--size);
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  pointer-events: none;
`;


export default Select;
