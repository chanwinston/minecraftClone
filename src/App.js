import React, { Component } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";

import { OrbitControls, Sky } from "@react-three/drei";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import Ground from "./components/Ground";

function Block() {
  const [ref, api] = useBox(() => ({ mass: 1 }));
  return (
    <mesh
      onClick={() => {
        api.velocity.set(0, 2, 0);
      }}
      ref={ref}
      position={[0, 1, 0]}
    >
      <boxBufferGeometry attach='geometry' />
      <meshLambertMaterial attach='material' color='grey' />
    </mesh>
  );
}

function App() {
  return (
    <Canvas>
      <OrbitControls />
      <Sky />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Physics>
        <Block />
        <Ground />
      </Physics>
    </Canvas>
  );
}

export default App;
