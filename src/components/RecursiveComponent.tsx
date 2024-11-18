import { IFile } from "../interfaces";
import FileIcon from "./SVG/File";
import FolderIcon from "./SVG/Folder";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({ fileTree }: IProps) => {
  return (
    <div className="mb-2 ml-2">
      <div className="flex">
        <span className="mr-2">
          {fileTree.isFolder ? <FolderIcon /> : <FileIcon />}
        </span>
        <span>{fileTree.name}</span>
      </div>
      {fileTree.children &&
        fileTree.children.map((file, idx) => (
          <RecursiveComponent key={idx} fileTree={file} />
        ))}
    </div>
  );
};

export default RecursiveComponent;
