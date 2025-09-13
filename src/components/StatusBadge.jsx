const StatusBadge = ({ status }) => {
  const badgeTone =
    status === "Ongoing"
      ? "bg-green-700"
      : status === "Draft"
      ? "bg-slate-500"
      : "bg-transparent";

  return (
    <span
      className={`text-[10px] ${badgeTone} !text-white uppercase font-bold py-1 px-2 rounded-sm ml-2`}
      aria-label={`Project is ${status}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
