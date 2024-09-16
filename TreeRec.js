export const treeData = {
  id: 1,
  name: "Root",
  children: [
    {
      id: 2,
      name: "Child 1",
      children: [
        { id: 3, name: "Grandchild 1" },
        { id: 4, name: "Grandchild 2" },
      ],
    },
    {
      id: 5,
      name: "Child 2",
      children: [{ id: 6, name: "Grandchild 3" }],
    },
    {
      id: 7,
      name: "Child 3",
      children: [
        { id: 8, name: "Grandchild 4" },
        { id: 9, name: "Grandchild 5" , children: [ { id: 10, name: "Great Grandchild 1" } ] },
      ],
    },
  ],
};


const TreeNode = ({ node }) => {
    const [expanded, setExpanded] = useState(false);
  
    const handleToggle = () => {
      setExpanded(!expanded);
    };
  
    return (
      <div style={{ marginLeft: 20 }}>
        <div>
          {node.children && node.children.length > 0 && (
            <button onClick={handleToggle} style={{ marginRight: 5 }}>
              {expanded ? '-' : '+'}
            </button>
          )}
          {node.name}
        </div>
        {expanded && node.children && node.children.length > 0 && (
          <div>
            {node.children.map(child => (
              <TreeNode key={child.id} node={child} />
            ))}
          </div>
        )}
      </div>
    );
  };

const Recursive = () => {
  console.log("treeData",treeData);

  return (
    <div>
      <h1>Recursive Component</h1>
      <TreeNode node={treeData} />
    </div>
  );
};

export default Recursive;
