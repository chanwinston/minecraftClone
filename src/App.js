import React from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";

import { OrbitControls, Sky } from "@react-three/drei";
import { Physics, useBox } from "@react-three/cannon";
import Ground from "./components/Ground";
import Player from "./components/Player";

// function Block() {
//   const [ref, api] = useBox(() => ({ mass: 1 }));
//   return (
//     <mesh
//       onClick={() => {
//         api.velocity.set(0, 2, 0);
//       }}
//       ref={ref}
//       position={[0, 1, 0]}
//     >
//       <boxBufferGeometry attach='geometry' />
//       <meshLambertMaterial attach='material' color='grey' />
//     </mesh>
//   );
// }

function App() {
  return (
    <Canvas shadowMap sRGB>
      <OrbitControls />
      <Sky />
      <ambientLight intensity={0.5} />
      <pointLight castShadow intensity={0.5} position={[100, 100, 100]} />
      <Physics gravity={[0, -30, 0]}>
        <Ground position={[0, 0.5, 0]} />
        <Player position={[0, 3, 10]} />
      </Physics>
    </Canvas>
  );
}

export default App;
