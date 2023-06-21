/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS, MAX_PROGRESS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    bar: {
      '--height': '8px',
    },
    wrapper: {
      '--height': '8px',
      '--padding': '0px',
      '--borderRadius': '4px' 
    }
  },
  medium: {
    bar: {
      '--height': '12px',
    },
    wrapper: {
      '--height': '12px',
      '--padding': '0px',
      '--borderRadius': '4px'
    }
  },
  large: {
    bar: {
      '--height': '16px',
    },
    wrapper: {
      '--height': '24px',
      '--padding': '4px',
      '--borderRadius': '8px'
    }
  },
};

/* We need to node when we have nested elements like Progress Bar Wrapper and Bar with a border radius, the outer border radius should be approx twice as big as the border radius of the inner element */

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  
  if (!styles) throw (`Unknown size passed to ProgressBar: ${size}.`);
  
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin='0'
      aria-valuemax='100'
      style={styles.wrapper}
    >
      <BarWrapper>
        <Bar style={{...styles.bar, '--width': `${value}%`}}/>
      </BarWrapper>
    <VisuallyHidden>{value}%</VisuallyHidden> 
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 370px;
  height: var(--height);
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--borderRadius);
  background-color: ${COLORS.transparentGray15};
  padding: var(--padding);
`;

/* We need the BarWrapper to be able to trim off the edges of the Bar close to 100% when the Progress Bar Wrapper has padding*/
const BarWrapper = styled.div`
  border-radius: 4px;
  /* overflow is used to trim off the edges of the Bar close to 100% so that the Bar fits the Wrapper border radius */
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;


export default ProgressBar;
