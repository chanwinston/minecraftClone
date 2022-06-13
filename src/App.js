import React from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";

import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import Ground from "./components/Ground";
import { Player } from "./components/Player";
import { Cube } from "./components/Cube";

import { useStore } from "./hooks/useStore";

function App() {
  const cubes = useStore((state) => state.cubes);
  return (
    <Canvas shadows>
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={0.5} />
      <pointLight castShadow intensity={0.75} position={[100, 100, 100]} />
      <Physics gravity={[0, -30, 0]}>
        <Ground position={[0, 0.5, 0]} />
        <Player position={[0, 3, 10]} />
        {cubes.map((cubes) => (
          <Cube position={cubes.position} type={cubes.type} />
        ))}
      </Physics>
    </Canvas>
  );
}

export default App;
