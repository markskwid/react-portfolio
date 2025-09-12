import { forwardRef } from "react";
const About = forwardRef((props, ref) => {
  return (
    <section className="lg:mb-42" ref={ref} data-section="about">
      <p className="text-muted">
        Hey there! I’m Mark — a web developer who loves building interfaces that
        not only look good but feel right. I’m all about creating user
        experiences that are smooth, accessible, and thoughtfully built, whether
        it’s a snappy e-commerce storefront or a custom UI component that just
        works.
      </p>

      <p className="mt-4 text-muted">
        Right now, I’m focused on front-end development in the{" "}
        <span>Shopify </span>and <span>BigCommerce</span> space, helping brands
        bring their ideas to life through clean code and solid design. I enjoy
        the little details — the kind that make a UI feel polished and intuitive
        — and I’m always learning something new to level up my work. needs, all
        while keeping performance and maintainability top of mind.
      </p>

      <p className="mt-4 text-muted">
        I’ve worked on a variety of projects, from custom CMS setups to
        performance fixes and beyond. My approach is simple: stay curious, stay
        kind, and build things that matter.
      </p>

      <p className="mt-4 text-muted">
        When I’m not coding, you’ll probably catch me lifting weights, listening
        to The 1975 on repeat, feeding stray animals, or diving into some
        late-night gaming sessions. I also dream of someday building something
        that gives back — especially to animals who need a voice.
      </p>
    </section>
  );
});

export default About;
