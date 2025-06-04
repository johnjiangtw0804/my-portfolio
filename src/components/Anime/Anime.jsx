import { Canvas } from "@react-three/fiber";
// import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { Room } from "./Optimized-room";
import HeroLights from "./HeroRoomLights";
import Particles from "./Particles";

function Anime() {
  return (
    <div className="items-center h-[500px] md:h-[600px] w-full">
      <Canvas
        className="overflow-hidden"
        camera={{ position: [5, 0, 10], fov: 60 }}
      >
        <HeroLights />
        <Particles count={100}></Particles>
        <OrbitControls
          enablePan={false}
          maxDistance={20}
          minDistance={5}
          minPolarAngle={Math.PI / 5} /* 上下的*/
          maxPolarAngle={Math.PI / 2}
        />
        <group position={[0, -4.5, 0]} rotation={[0, -Math.PI / 4, 0]}>
          <Room />
        </group>
      </Canvas>
    </div>
  );
}

export default Anime;
