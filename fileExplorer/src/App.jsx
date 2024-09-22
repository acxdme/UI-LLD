import React from 'react';
import Folder from './components/Folder';
import fileStructure from './constant/ds';

function App() {
  return (
    <div>
      <Folder name={fileStructure.name} children={fileStructure.children} />
    </div>
  );
}

export default App;
