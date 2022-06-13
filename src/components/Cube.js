import React from "react";
import { useBox } from "@react-three/cannon";
import * as textures from "../textures";
import { useStore } from "../hooks/useStore";

export const Cube = ({ position, type, ...props }) => {
  const [addCube, removeCube, activeType] = useStore((state) => [
    state.addCube,
    state.removeCube,
    state.type,
  ]);
  const [ref] = useBox(() => ({
    type: "Static",
    position,
    ...props,
  }));

  return (
    <mesh
      castShadow
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        const clickedFace = Math.floor(e.faceIndex / 2);
        const { x, y, z } = ref.current.position;
        if (clickedFace === 0) {
          e.shiftKey
            ? removeCube(x, y, z, activeType)
            : addCube(x + 1, y, z, activeType);
          return;
        }
        if (clickedFace === 1) {
          e.shiftKey
            ? removeCube(x, y, z, activeType)
            : addCube(x - 1, y, z, activeType);
          return;
        }
        if (clickedFace === 2) {
          e.shiftKey
            ? removeCube(x, y, z, activeType)
            : addCube(x, y + 1, z, activeType);
          return;
        }
        if (clickedFace === 3) {
          e.shiftKey
            ? removeCube(x, y, z, activeType)
            : addCube(x, y - 1, z, activeType);
          return;
        }
        if (clickedFace === 4) {
          e.shiftKey
            ? removeCube(x, y, z, activeType)
            : addCube(x, y, z + 1, activeType);
          return;
        }
        if (clickedFace === 5) {
          e.shiftKey
            ? removeCube(x, y, z, activeType)
            : addCube(x, y, z - 1, activeType);
          return;
        }
      }}
    >
      {[...Array(6)].map((_, index) => (
        <meshStandardMaterial
          attachArray='material'
          map={textures[type]}
          key={index}
        />
      ))}
      <boxBufferGeometry attach='geometry' />
    </mesh>
  );
};
