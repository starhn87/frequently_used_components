import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Box, Container, Title } from "./GlobalStyles";

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 80px;
  height: 34px;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
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
  -webkit-transition: 0.5s;
  transition: 0.5s;
  border-radius: 34px;

  ${(props) =>
    props.disabled
      ? `
  opacity: 0.3;
  pointer-events: none;
  `
      : ""}

  &:before {
    border-radius: 50%;
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: ${(props) => props.switchButtonColor};
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

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
  const toggler = useRef();

  const onClick = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  useEffect(() => {
    const toggleSwitch = toggler.current;
    toggleSwitch.addEventListener("mouseup", onClick);

    return () => {
      toggleSwitch.removeEventListener("mouseup", onClick);
    };
  }, [checked, onClick]);

  return (
    <Box>
      <Title>Toggle</Title>
      <Container>
        <Switch>
          <Input type="checkbox" checked={checked} readOnly />
          <Slider
            ref={toggler}
            color={color}
            disabled={disabled}
            switchButtonColor={switchButtonColor}
          ></Slider>
        </Switch>
        <Explain>{`Toggle Switch ${checked ? "ON" : "OFF"}`}</Explain>
      </Container>
    </Box>
  );
}

export default Toggle;
