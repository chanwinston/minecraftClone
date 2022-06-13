import React from "react";
import { useSphere } from "@react-three/cannon";
import { useThree, useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "../hooks/useKeyboardControls";

const Player = (props) => {
  const { moveForward, moveBackward, moveLeft, moveRight, jump } =
    useKeyboardControls();
  console.log(moveRight);
  const { camera } = useThree();
  const [ref] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    ...props,
  }));

  useFrame(() => {
    camera.position.copy(ref.current.position);
  });
  return (
    <>
      <mesh ref={ref} />
    </>
  );
};

export default Player;
