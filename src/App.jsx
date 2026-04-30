import "./index.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/MainContent/Hero";

function App() {
  return (
    <div className="flex min-h-screen flex-col ">
      <Header />
      <main className="flex-1 overflow-auto bg-base-200 text-base-text">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
