import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

export default function Hero3D() {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-4xl font-bold">Jonathan Jiang</h1>
        <p className="text-lg mt-2">Welcome to my 3D Portfolio</p>
      </div>
    </div>
  );
}
