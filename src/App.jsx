import Header from "./components/Header";
import Scene from "./components/Scene";
import Hero from "./components/Hero";

// scene: container all the action happens (space)
// environment: surrounding background in the scene
// Objects: elements. Mesh
// camera: see the scene (viewpoint)
// renderer: brain, data from our eyes
function App() {
  return (
    <>
      {/* 背景圖層們 */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/20 blur-2xl rounded-full" />

      {/* 實際內容 */}
      <div className="center-container">
        <Header />
        <Scene className="w-full h-[550px]" />
        <Hero />
      </div>
    </>
  );
}

export default App;
