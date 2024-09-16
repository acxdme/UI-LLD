import { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ data }) => {
  const [activeIndex,setActiveIndex ] = useState(0);

  return data.map((item,index) => (
    <AccordionItem
      title={item.title}
      description={item.description}
      key={item.id}
      currentIndex = {index}
      open = {activeIndex}
      setIsOpen = {()=>{
         if(activeIndex === index) setActiveIndex(null);
         else setActiveIndex(index);
         console.log("openIndex change triggered");
      }}
    />
  ));
};

export default Accordion;
