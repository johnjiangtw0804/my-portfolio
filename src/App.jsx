import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";

function App() {
  return (
    <>
      {/* 背景圖層們 */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/20 blur-2xl rounded-full" />

      {/* 實際內容 */}
      <Header />
      <main>
        <Hero />
        <TechStack />
      </main>
    </>
  );
}

export default App;
