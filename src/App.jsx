import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  Stage,
  PresentationControls,
  OrbitControls,
} from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("/piller.glb");
  return <primitive object={scene}  {...props} />;
}

export default function App() {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{ fov: 45 }}
      style={{ width: "500px", height: "500px" }}
    >
      <OrbitControls autoRotate />
      <PresentationControls
        speed={1.5}
        global
        zoom={0.5}
        polar={[-0.1, Math.PI / 4]}
      >
        <Stage environment={null}>
          <Model scale={0.01} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
}
