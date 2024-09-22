const fileStructure = {
  name: "root",
  isFolder: true,
  children: [
    {
      name: "src",
      isFolder: true,
      children: [
        { name: "App.js", isFolder: false },
        { name: "index.css", isFolder: false },
      ],
    },
    { name: "public", isFolder: true },
    { name: "package.json", isFolder: false },
  ],
};

export default fileStructure;
