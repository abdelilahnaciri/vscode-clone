import { useSelector } from "react-redux";
import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/fileTree";
import { RootState } from "./app/store";

function App() {
  const { openedFiles } = useSelector((state: RootState) => state.tree);
  return (
    <div className="my-5">
      <RecursiveComponent fileTree={fileTree} />
      <ul>
        {openedFiles.map((file, idx) => (
          <li key={idx}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
