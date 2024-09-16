import { useState } from "react";
import * as React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RecursiveReplies from "./Replies";

const folderStructure = [
  {
    id: 1,
    name: "root",
    type: "folder",
    children: [
      {
        id: 2,
        name: "src",
        type: "folder",
        children: [
          {
            id: 3,
            name: "components",
            type: "folder",
            children: [
              {
                id: 4,
                name: "Header.js",
                type: "file",
              },
              {
                id: 5,
                name: "Footer.js",
                type: "file",
              },
            ],
          },
          {
            id: 6,
            name: "App.js",
            type: "file",
          },
          {
            id: 7,
            name: "index.js",
            type: "file",
          },
        ],
      },
      {
        id: 8,
        name: "public",
        type: "folder",
        children: [
          {
            id: 9,
            name: "index.html",
            type: "file",
          },
        ],
      },
      {
        id: 10,
        name: "package.json",
        type: "file",
      },
    ],
  },
];

const Node = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          padding: "5px 0",
        }}
        onClick={handleToggle}
      >
        {data?.children && (
          isOpen ? <ExpandMoreIcon /> : <ChevronRightIcon />
        )}
        <span
          style={{
            paddingLeft: "8px",
            fontWeight: data.type === "folder" ? "bold" : "normal",
            color: data.type === "folder" ? "#1a73e8" : "#333",
          }}
        >
          {data.name}
        </span>
      </div>
      {isOpen && (
        <div style={{ paddingLeft: "20px", borderLeft: "2px solid #ddd", marginLeft: "8px" }}>
          {data?.children?.map((n) => (
            <Node key={n.id} data={n} />
          ))}
        </div>
      )}
    </>
  );
};

function App() {
  return (

    <div style={{ paddingLeft: "10px", fontFamily: "Arial, sans-serif" }}>
      <RecursiveReplies/>
      {/* {folderStructure?.map((folder) => (
        <Node key={folder.id} data={folder} />
      ))} */}
    </div>
  );
}

export default App;
