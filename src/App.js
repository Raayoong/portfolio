import About from "./components/about";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Skills from "./components/skills";


function App() {
  return (
    <div className="App w-full">
      <nav className="w-full">
        <Navbar />
      </nav>
      <main className="lg:w-[1460px] w-full  mx-auto mt-[5rem] p-4">
        <Home />
        <About />
        <Skills />
      </main>
    </div>
  );
}



export default App;