import React, { useState } from "react";
import "../App.css";

const File = ({ name }) => {
  return <div>{name}</div>;
};

const Folder = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div>
      <div onClick={handleClick} style={{ cursor: "pointer" }}>
        {isOpen ? "-" : "+"} {name}
      </div>
      {isOpen && (
        <div style={{ paddingLeft: "20px" }}>
          {children &&
            children.map((child, index) =>
              child.isFolder ? (
                <Folder
                  key={index}
                  name={child.name}
                  children={child.children}
                />
              ) : (
                <File key={index} name={child.name} />
              )
            )}
        </div>
      )}
    </div>
  );
};

export default Folder;
