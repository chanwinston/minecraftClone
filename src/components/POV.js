import { extend, useThree } from "@react-three/fiber";
import { PointerLockControls as PointerLockControlsImpl } from "@react-three/drei";
import React from "react";
import { useRef, useEffect } from "react";

extend({ PointerLockControlsImpl });

export const POV = () => {
  const { camera, gl } = useThree();
  const controls = useRef();

  useEffect(() => {
    document.addEventListener("click", () => {
      controls.current.lock();
    });
  }, []);

  return (
    <PointerLockControlsImpl ref={controls} args={[camera, gl.domElement]} />
  );
};
