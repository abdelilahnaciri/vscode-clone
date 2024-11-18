import { useState } from "react";
import { IFile } from "../interfaces";
import BottomArrowIcon from "./SVG/Bottom";
import RightArrowIcon from "./SVG/Right";
import RenderFileIcon from "./RenderFileIcon";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({
  fileTree: { isFolder, name, children },
}: IProps) => {
  const [isOpen, setIsOpen] = useState(true);

  // ** Handlers
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };
  // console.log("File Before JSX:", name);
  return (
    <div className="mb-2 ml-2 cursor-pointer">
      <div className="flex items-center mb-1">
        {isFolder ? (
          <div className="flex items-center" onClick={toggle}>
            {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
            {/* <FolderIcon /> */}
            <RenderFileIcon
              filename={name}
              isFolder={isFolder}
              isOpen={isOpen}
            />
            <span className="ml-2">{name}</span>
          </div>
        ) : (
          <div className="flex items-center mr-2">
            <RenderFileIcon filename={name} />
            <span className="ml-2">{name}</span>
          </div>
        )}

        {/* {console.log(isOpen)}
        {console.log(name, "done!")} */}
      </div>
      {isOpen &&
        children &&
        children.map((file, idx) => {
          // console.log("file now is", idx, file);
          // console.log("isOpen is: ", isOpen);
          return <RecursiveComponent key={idx} fileTree={file} />;
        })}
    </div>
  );
};

export default RecursiveComponent;
