import { useState, useEffect, Fragment } from 'react';
import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';
import { css, keyframes } from '@emotion/react';
import crows from './crows.svg';

const flyCycle = keyframes`
  100% {
    background-position: -900px 0;
  }
`;

const flyRightOne = keyframes`
  0% {
    transform: scale(0.3) translateX(-10vw);
  }
  10% {
    transform: translateY(2vh) translateX(10vw) scale(0.4);
  }
  20% {
    transform: translateY(0vh) translateX(30vw) scale(0.5);
  }
  30% {
    transform: translateY(4vh) translateX(50vw) scale(0.6);
  }
  40% {
    transform: translateY(2vh) translateX(70vw) scale(0.6);
  }
  50% {
    transform: translateY(0vh) translateX(90vw) scale(0.6);
  }
  60% {
    transform: translateY(0vh) translateX(110vw) scale(0.6);
  }
  100% {
    transform: translateY(0vh) translateX(110vw) scale(0.6);
  }
`;

const crowStyles = (duration, delay) => css`
  background-image: url(${crows});
  background-size: auto 100%;
  width: 88px;
  height: 125px;
  will-change: background-position;
  animation: ${flyCycle} steps(10) infinite;
  animation-duration: ${duration};
  animation-delay: ${delay};
`;

const crowContainerStyles = (duration, delay) => css`
  position: absolute;
  top: 20%;
  left: -10%;
  transform: scale(0) translateX(-10vw);
  will-change: transform;
  animation: ${flyRightOne} linear infinite;
  animation-duration: ${duration};
  animation-delay: ${delay};
`;

const Crows = ({ renderNumber = 1, automatic = false }) => {
  const [crows, setCrows] = useState([]);
  const [showCrow, setShowCrow] = useState(false);

  useEffect(() => {
    for (let i = 0; i < renderNumber; i++) {
      setTimeout(() => {
        setCrows(prevCrows => [
          ...prevCrows,
          { id: uuidv4() }
        ]);
      }, i * 1000);
    }
  }, [renderNumber]);

  useEffect(() => {
    if (!automatic) {
      let typedText = '';

      const handleKeyPress = (event) => {
        typedText += event.key;
        if (typedText.toLowerCase().includes('crow')) {
          setShowCrow(true);
          typedText = '';
        } else if (typedText.length > 4) {
          typedText = typedText.slice(1);
        }
      };

      document.addEventListener('keydown', handleKeyPress);
      return () => {
        document.removeEventListener('keydown', handleKeyPress);
      };
    } else {
      setShowCrow(true);
    }
  }, [automatic]);

  return (
    showCrow && (
      <Box sx={{ zIndex: 3, position: 'fixed' }}>
        {crows.map(crow => (
          <Fragment key={crow.id}>
            <Box css={crowContainerStyles('15s', '0s')}>
              <Box css={crowStyles('1s', '-0.5s')} />
            </Box>
            <Box css={crowContainerStyles('16s', '1s')}>
              <Box css={crowStyles('0.9s', '-0.75s')} />
            </Box>
            <Box css={crowContainerStyles('14.6s', '9.5s')}>
              <Box css={crowStyles('1.25s', '-0.25s')} />
            </Box>
            <Box css={crowContainerStyles('16s', '10.25s')}>
              <Box css={crowStyles('1.1s', '-0.5s')} />
            </Box>
          </Fragment>
        ))}
      </Box>
    )
  );
};

Crows.propTypes = {
  renderNumber: PropTypes.number,
  automatic: PropTypes.bool
};

export default Crows;
