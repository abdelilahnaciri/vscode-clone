import FileComponent from "./components/FileComponent";
import FolderComponent from "./components/FolderComponent";

function App() {
  return (
    <div className="m-3">
      <FileComponent name="index.tsx" />
      <FolderComponent foldername="node_modules" />
    </div>
  );
}

export default App;
