import OpenedFilesBar from "./components/OpenedFilesBar";
import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/fileTree";

function App() {
  return (
    <div>
      <div className="flex h-screen">
        <div className="w-64 border-r border-white">
          <RecursiveComponent fileTree={fileTree} />
        </div>
        <OpenedFilesBar />
      </div>
    </div>
  );
}

export default App;
