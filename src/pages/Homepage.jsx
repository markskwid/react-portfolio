import About from "../components/About";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Projects from "../components/Projects";
export default function Homepage() {
  return (
    <div className="parent-container min-h-screen w-screen flex flex-col lg:flex-row relative">
      {/* <!-- right left sticky --> */}
      <div className="w-full lg:w-1/2">
        <Header />
      </div>

      <div className="w-full lg:w-1/2 lg:py-24">
        <About />
        <Experience />
        <Projects />

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
