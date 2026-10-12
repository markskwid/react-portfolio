export default function TechStack({ items }) {
  if (!items?.length) return null;

  return (
    <ul
      className="flex justify-start items-start flex-wrap gap-x-2 mt-3"
      aria-label="Technology Stack"
    >
      {items.map((tech) => (
        <li
          key={tech}
          className="py-1 px-3 text-center rounded-full bg-jade-900/20 text-jade-900 shadow-2xl mt-2 flex items-center"
        >
          <span className="text-[.85rem]">{tech}</span>
        </li>
      ))}
    </ul>
  );
}
