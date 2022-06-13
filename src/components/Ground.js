import { usePlane } from "@react-three/cannon";
import grass from "../images/grass.jpg";
import { TextureLoader, RepeatWrapping } from "three";
import { useStore } from "@react-three/fiber";

const Ground = (props) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  const texture = new TextureLoader().load(grass);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(100, 100);
  const [addCube, activeType] = useStore((state) => [
    state.addCube,
    state.type,
  ]);
  return (
    <mesh
      ref={ref}
      receiveShadow
      onClick={(e) => {
        e.stopPropagation();
        const [x, y, z] = Object.values(e.point).map((cord) => Math.ceil(cord));
        addCube(x, y, z, activeType);
      }}
    >
      <planeBufferGeometry attach='geometry' args={[100, 100]} />
      <meshStandardMaterial map={texture} attach='material' />
    </mesh>
  );
};

export default Ground;
