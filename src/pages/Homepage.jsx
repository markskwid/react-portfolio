import { useEffect, useRef, useState } from "react";
import About from "../components/About";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Projects from "../components/Projects";
import { root } from "postcss";
export default function Homepage() {
  const refs = useRef([]);
  const [activeSection, setActiveSection] = useState("");

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
      {/* <!-- right left sticky --> */}
      <div className="w-full lg:w-1/2">
        <Header activeSection={activeSection} />
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
