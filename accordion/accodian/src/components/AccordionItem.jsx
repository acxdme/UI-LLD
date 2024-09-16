import { useState } from "react";
import "../App.css";
const AccordionItem = ({ title, description ,open,setIsOpen,currentIndex }) => {
  // const [open, setIsOpen] = useState(false);

  return (
    <div className="itemBox">
      <div
        className="itemHeader"
        onClick={() => {
          setIsOpen((open) => !open);
        }}
      >
        <span>{title}</span>
        {open === currentIndex ? <span>{`- `}</span> : <span>{`+ `}</span>}
      </div>
      {open === currentIndex && <div className="itemDescription">{description}</div>}
    </div>
  );
};

export default AccordionItem;
