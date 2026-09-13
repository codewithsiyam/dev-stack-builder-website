import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import TechnologyGrid from "./components/TechnologyGrid.tsx";
import YourStack from "./components/YourStack.tsx";
import Projects from "./components/Projects.tsx";
import About from "./components/About.tsx";
import Footer from "./components/Footer.tsx";
import type { Technology } from "./types/technology.ts";

function App() {
  // The user's selected stack lives here since both the grid (to know which
  // cards are already added) and the sidebar (to list/remove them) need it.
  const [stack, setStack] = useState<Technology[]>([]);

  const isInStack = (id: string): boolean =>
    stack.some((item) => item.id === id);

  function handleAddToStack(tech: Technology) {
    if (isInStack(tech.id)) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack!`);
  }

  function handleRemoveFromStack(id: string) {
    const removed = stack.find((item) => item.id === id);
    if (!removed) return;
    setStack((prev) => prev.filter((item) => item.id !== id));
    toast.info(`${removed.name} removed from your stack.`);
  }

  function handleRemoveAll() {
    if (stack.length === 0) return;
    setStack([]);
    toast.info("Your stack has been cleared.");
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />

      <section id="technologies" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Explore the <span className="text-brand-gradient">Technologies</span>
          </h2>
          <p className="mt-2 text-slate-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
          <TechnologyGrid stack={stack} onAddToStack={handleAddToStack} />

          <YourStack
            stack={stack}
            onRemove={handleRemoveFromStack}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </section>

      <Projects />
      <About />

      <Footer />

      <ToastContainer position="top-right" autoClose={2500} newestOnTop pauseOnHover />
    </div>
  );
}

export default App;
