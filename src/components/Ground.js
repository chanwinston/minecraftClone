import { usePlane } from "@react-three/cannon";
import grass from "../textures/grass.jpg";
import { TextureLoader } from "three";
import { useStore } from "@react-three/fiber";
import { RepeatWrapping } from "three";

function Ground(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  const [addCube, type] = useStore((state) => [state.addCube, state.type]);
  const texture = new TextureLoader().load(grass);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(100, 100);
  return (
    <mesh position={(0, 0, 0)} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach='geometry' args={[100, 100]} />
      <meshLambertMaterial map={texture} attach='material' />
    </mesh>
  );
}

export default Ground;
