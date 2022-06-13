import { usePlane } from "@react-three/cannon";
import grass from "../images/grass.jpg";
import { TextureLoader, RepeatWrapping } from "three";

const Ground = (props) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  const texture = new TextureLoader().load(grass);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(100, 100);
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach='geometry' args={[100, 100]} />
      <meshStandardMaterial map={texture} attach='material' />
    </mesh>
  );
};

export default Ground;
