import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { MenuContextProvider } from "./context/MenuContext";

export default function App() {
  return (
    <MenuContextProvider>
      <section id="hero">
        <Hero />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </MenuContextProvider>
  );
}
