import Home from "./components/home";
import Navbar from "./components/navbar";


function App() {
  return (
    <div className="App w-full">
      <nav className="w-full">
        <Navbar />
      </nav>
      <main className="w-[1460px] mx-auto mt-[5rem] p-4">
        <Home />
      </main>
    </div>
  );
}

export default App;