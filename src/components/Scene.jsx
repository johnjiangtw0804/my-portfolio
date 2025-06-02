import { Canvas } from "@react-three/fiber";
// import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { Room } from "./Optimized-room";
import { useMediaQuery } from "react-responsive";
import HeroLights from "./HeroRoomLights";
import { TypeAnimation } from "react-type-animation";

function TypingAnime() {
  return (
    <TypeAnimation
      sequence={[
        "Hi,",
        1000,
        "Welcome to my portfolio :)",
        2000,
        "Here is where the story begins...",
        () => {
          console.log("Sequence completed");
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{
        fontSize: "1.8em",
        fontFamily: "'Courier New', Courier, monospace",
        color: "#00BFFF",
        textShadow: "0 0 5px #00FF5F",
        display: "inline-block",
        backgroundColor: "black",
        padding: "1rem",
        borderRadius: "8px",
      }}
    />
  );
}

function Scene({ className }) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div className={`flex ${className} section-container`}>
      <Canvas
        className="flex-[2] h-full overflow-hidden"
        camera={{ position: [5, 0, 10], fov: 60 }} // 👁️ Move closer
      >
        <HeroLights />
        <OrbitControls
          enablePan={false}
          maxDistance={20}
          minDistance={5}
          minPolarAngle={Math.PI / 5} /* 上下的*/
          maxPolarAngle={Math.PI / 2}
        />
        <group
          scale={isMobile ? 0.7 : 1.5}
          position={[0, -4.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />
        </group>
      </Canvas>

      {/**  打字動畫 */}
      <div className="flex-[3] flex items-center justify-start">
        <TypingAnime />
      </div>
    </div>
  );
}

export default Scene;
