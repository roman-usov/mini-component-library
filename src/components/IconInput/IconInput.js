import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    size: 16,
    strokeWidth: 1,
    styles: {
      '--border-bottom': `${1}px solid black`,
      '--font-size': `${14 / 16}rem`,
      '--padding': `4px 0 4px 24px`,
    }
  },
  large: {
    size: 24,
    strokeWidth: 2,
    styles: {
      '--border-bottom': `${2}px solid black`,
      '--font-size': `${18 / 16}rem`,
      '--padding': `6px 0 7px 36px`,
    }
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const sizeProps = SIZES[size];
  const inputStyles = {...sizeProps.styles, '--width': `${width}px`};
  
  return (
    <>
      <VisuallyHidden>
        <label htmlFor="iconinput">{label}</label>
      </VisuallyHidden>
      <InputWrapper>
        <IconWrapper style={{ '--size': `${sizeProps.size}px` }}><Icon id={icon} size={sizeProps.size} strokeWidth={sizeProps.strokeWidth}></Icon></IconWrapper>
        <NativeInput id="iconinput" type="text" name={label} placeholder={placeholder} style={inputStyles}/>
      </InputWrapper>
    </>
  );
};

const InputWrapper = styled.div`
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: black;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  width: var(--size);
  height: var(--size);
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto 0;
  pointer-events: none;
`;

const NativeInput = styled.input`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: var(--font-size);
  color: inherit;
  width: var(--width);
  border: transparent;
  border-bottom: var(--border-bottom);
  padding: var(--padding);
  
  
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline-offset: 2px;
  }
`;


export default IconInput;
