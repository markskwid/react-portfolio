import { useEffect, useState } from "react";

const StatusBadge = ({ status }) => {
  const [badgeTone, setBadgeTone] = useState("");
  useEffect(() => {
    const setTone = () => {
      let temp = "";
      switch (status) {
        case "Ongoing":
          temp = "bg-green-700";
          break;
        case "Draft":
          temp = "bg-slate-500";
          break;
        default:
          temp = "bg-transparent";
      }
      setBadgeTone(temp);
    };

    setTone();
  }, []);

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
