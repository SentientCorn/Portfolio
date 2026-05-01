import "./index.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/MainContent/Hero";

function App() {
  return (
    <div className="flex min-h-screen flex-col ">
      <Header />
      <main className="flex flex-1 min-h-0 flex-col overflow-auto bg-base-200 text-base-text">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
