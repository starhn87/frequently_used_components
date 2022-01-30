import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Circle = styled.div`
  position: absolute;
  display: none;
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 50px;
  pointer-events: none;
  z-index: 0;

  &.clicking {
    z-index: 2;
    display: block;
  }
`;

function MouseCircle() {
  const HALF_RADIUS = 25;
  const circle = useRef();
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseDown = (event) => {
    const x = event.clientX - HALF_RADIUS;
    const y = event.clientY - HALF_RADIUS;

    circle.current.classList.toggle("clicking");
    setX(x);
    setY(y);
  };

  const handleMouseMove = (event) => {
    const x = event.clientX - HALF_RADIUS;
    const y = event.clientY - HALF_RADIUS;

    setX(x);
    setY(y);
  };

  const handleMouseUp = () => {
    circle.current.classList.toggle("clicking");
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [x, y]);

  return <Circle ref={circle} style={{ top: `${y}px`, left: `${x}px` }} />;
}

export default MouseCircle;
