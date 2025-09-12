import { useEffect, useRef, useState } from "react";
import About from "../components/About";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Projects from "../components/Projects";
import { root } from "postcss";
export default function Homepage() {
  const refs = useRef([]);
  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });
  const [activeSection, setActiveSection] = useState("");

  //use effect for cursor position
  useEffect(() => {
    const handleMove = (e) => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.dataset.section);
          }
        });
      },
      {
        root: null,
        treshold: 0,
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    refs.current.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [activeSection]);

  return (
    <div className="parent-container min-h-screen w-screen flex flex-col lg:flex-row relative">
      <div
        style={{
          borderRadius: "100%",
          background: `radial-gradient(600px at 300px 300px, rgba(29, 78, 216, 0.15), transparent 50%)`,
          position: "fixed",
          left: cursorPosition.x - 300,
          top: cursorPosition.y - 300,
          zIndex: "9999",
          width: "600px",
          height: "600px",
          pointerEvents: "none",
        }}
      ></div>
      {/* <!-- right left sticky --> */}
      <div className="w-full lg:w-1/2">
        <Header activeSection={activeSection} refs={refs} />
      </div>

      <div className="w-full lg:w-1/2 lg:py-24">
        <About ref={(el) => (refs.current[0] = el)} />
        <Experience ref={(el) => (refs.current[1] = el)} />
        <Projects ref={(el) => (refs.current[2] = el)} />

        <footer className="max-w-md mt-20">
          <p className="text-muted text-[.85rem] text-start">
            This website was inspired by <span>Brittany Chiang</span>. I
            developed it using <span>Visual Studio Code</span> and built it
            with&nbsp;
            <span>Vite</span> and <span>Tailwind CSS</span>. If you have any
            questions, feel free to contact me via email. Happy coding!
          </p>
        </footer>
      </div>
    </div>
  );
}
