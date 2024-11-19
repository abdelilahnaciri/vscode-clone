import { useState } from "react";
import { IFile } from "../interfaces";
import BottomArrowIcon from "./SVG/Bottom";
import RightArrowIcon from "./SVG/Right";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveTabIdAction,
  setOpenedFilesAction,
} from "../app/features/fileTreeSlice";
import { RootState } from "../app/store";
import { doesFileObjExist } from "../utils/functions";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({ fileTree }: IProps) => {
  const { id, isFolder, name, children } = fileTree;
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const { openedFiles } = useSelector((state: RootState) => state.tree);
  const dispatch = useDispatch();

  // ** Handlers
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };
  const onFileClicked = () => {
    const exists = doesFileObjExist(openedFiles, id);
    if (exists) return;
    dispatch(setOpenedFilesAction([...openedFiles, fileTree]));
    dispatch(setActiveTabIdAction(id));
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
          <div className="flex items-center mr-2" onClick={onFileClicked}>
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
