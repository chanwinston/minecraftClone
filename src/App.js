import React from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";

import { OrbitControls, Sky } from "@react-three/drei";
import { Physics, useBox, usePlane } from "@react-three/cannon";

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

function Ground() {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));
  return (
    <mesh position={(0, 0, 0)} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach='geometry' args={[100, 100]} />
      <meshLambertMaterial attach='material' color='green' />
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
