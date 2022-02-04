import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Wrapper from "./common/Wrapper";

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 80px;
  height: 34px;
`;

const Slider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #c5c5c5;
  background: linear-gradient(
      to left,
      #c5c5c5 50%,
      ${(props) => props.color} 50%
    )
    right;
  background-size: 200%;
  border-radius: 34px;
  transition: 0.5s;
  -webkit-transition: 0.5s;
  cursor: pointer;

  ${(props) =>
    props.disabled
      ? `
  opacity: 0.3;
  pointer-events: none;
  `
      : ""}

  &:before {
    position: absolute;
    left: 4px;
    bottom: 4px;
    height: 26px;
    width: 26px;
    background-color: ${(props) => props.switchButtonColor};
    border-radius: 50%;
    content: "";
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }
`;

const Input = styled.input`
  width: 0;
  height: 0;
  opacity: 0;

  ${(props) =>
    props.checked
      ? `
    & + ${Slider} {
      background-position: left;

      &:before {
      -webkit-transform: translateX(45px);
      -ms-transform: translateX(45px);
      transform: translateX(45px);
      }
    }
  `
      : ""}

  &:focus + ${Slider} {
    box-shadow: 0 0 1px #2196f3;
  }
`;

const Explain = styled.div`
  padding-top: 20px;
`;

function Toggle({
  defaultChecked = false,
  color = "#4800ce",
  disabled = false,
  switchButtonColor = "white",
}) {
  const [checked, setChecked] = useState(defaultChecked);

  const onMouseUp = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  return (
    <Wrapper title="Toggle">
      <Switch>
        <Input type="checkbox" checked={checked} readOnly />
        <Slider
          color={color}
          disabled={disabled}
          switchButtonColor={switchButtonColor}
          onMouseUp={onMouseUp}
        ></Slider>
      </Switch>
      <Explain>{`Toggle Switch ${checked ? "ON" : "OFF"}`}</Explain>
    </Wrapper>
  );
}

export default Toggle;
