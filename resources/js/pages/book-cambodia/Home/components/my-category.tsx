import React from 'react';
import styled from 'styled-components';

const MyCategory = ({category}) => {
  return (
    <StyledWrapper>
      <button className="button">{category}</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    padding: 6px 18px;
    background: radial-gradient(circle at 30% 30%, #ff6b6b, #114775);
    color: #fff;
    font-family: "Courier New", monospace;
    font-size: 15px;
    font-weight: bold;
    border: 3px dashed #fff;
    border-radius: 12px 24px 12px 24px;
    box-shadow:
      0 4px 0 #333,
      inset 0 0 10px rgba(255, 255, 255, 0.5);
    position: relative;
    overflow: hidden;
  }

  .button::before {
    content: "★";
    position: absolute;
    top: 5px;
    left: 5px;
    font-size: 14px;
    opacity: 0.7;
    transition:
      transform 0.3s ease,
      opacity 0.3s ease;
  }

  .button:hover::before {
    transform: translateX(5px) rotate(20deg);
    opacity: 1;
  }

  .button:active {
    transform: scale(0.95) translateY(3px); /* Shrinks and drops */
    box-shadow:
      0 2px 0 #333,
      inset 0 0 15px rgba(255, 255, 255, 0.8); /* Flatter shadow, brighter glow */
    border-color: #ffeb3b; /* Quick color flash */
  }`;

export default MyCategory;
