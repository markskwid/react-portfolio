import { useEffect, useRef, useState } from "react";
import About from "../components/About";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Projects from "../components/Projects";

export default function Homepage() {
  const refs = useRef([]);
  const spotlightRef = useRef(null);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const spotlight = spotlightRef.current;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!spotlight || !hasFinePointer || prefersReducedMotion) return;

    let animationFrame = null;
    let pointerX = 0;
    let pointerY = 0;

    const handleMove = (e) => {
      pointerX = e.clientX;
      pointerY = e.clientY;

      if (animationFrame !== null) return;

      animationFrame = window.requestAnimationFrame(() => {
        spotlight.style.transform = `translate3d(${pointerX - 300}px, ${
          pointerY - 300
        }px, 0)`;
        spotlight.style.opacity = "1";
        animationFrame = null;
      });
    };
    
    window.addEventListener("pointermove", handleMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handleMove);
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const nextSection = entry.target.dataset.section;
            setActiveSection((currentSection) =>
              currentSection === nextSection ? currentSection : nextSection
            );
          }
        });
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    const sections = refs.current.filter(Boolean);
    sections.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="parent-container min-h-screen w-full flex flex-col lg:flex-row relative">
      <div
        ref={spotlightRef}
        aria-hidden="true"
        style={{
          borderRadius: "100%",
          background: `radial-gradient(600px at 300px 300px, rgba(29, 78, 216, 0.15), transparent 50%)`,
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: "9999",
          width: "600px",
          height: "600px",
          pointerEvents: "none",
          opacity: 0,
          willChange: "transform",
        }}
      ></div>
      {/* <!-- right left sticky --> */}
      <div className="w-full lg:w-1/2">
        <Header activeSection={activeSection} />
      </div>

      <main className="w-full lg:w-1/2 lg:py-24">
        <About ref={(el) => (refs.current[0] = el)} />
        <Experience ref={(el) => (refs.current[1] = el)} />
        <Projects ref={(el) => (refs.current[2] = el)} />

        <footer className="max-w-md mt-20">
          <p className="text-muted text-[.85rem] text-start">
            This website was inspired by <span>Brittany Chiang</span>. I
            developed it using <span>Visual Studio Code</span> and built it
            with&nbsp;
            <span>Vite</span> and <span>Tailwind CSS</span>. If you have any
            questions, feel free to contact me via <a href="mailto:bascal.markponce.f.1015@gmail.com">email</a>. Happy
            coding!
          </p>
        </footer>
      </main>
    </div>
  );
}
