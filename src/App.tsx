import OpenedFilesBar from "./components/OpenedFilesBar";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import { fileTree } from "./data/fileTree";

function App() {
  return (
    <div>
      <div className="flex h-screen bg-[#131327]">
        <ResizablePanel
          leftPanel={
            <div className="w-64">
              <RecursiveComponent fileTree={fileTree} />
            </div>
          }
          rightPanel={<OpenedFilesBar />}
        />
      </div>
    </div>
  );
}

export default App;
