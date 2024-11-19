import { useDispatch, useSelector } from "react-redux";
import { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import {
  setActiveTabIdAction,
  setClickedFileAction,
} from "../app/features/fileTreeSlice";
import { RootState } from "../app/store";

interface IProps {
  file: IFile;
}

const OpenedFilesBarTab = ({ file }: IProps) => {
  const { activeTabId } = useSelector((state: RootState) => state.tree);
  const dispatch = useDispatch();

  // ** Handlers:
  const onClick = () => {
    const { id, name, content } = file;
    dispatch(setClickedFileAction({ filename: name, fileContent: content }));
    dispatch(setActiveTabIdAction(id));
  };
  return (
    <div
      className={`cursor-pointer flex items-center p-2 border-b ${
        activeTabId === file.id ? "border-[#fac525]" : "border-transparent"
      }`}
      onClick={onClick}
    >
      <RenderFileIcon filename={file.name} />
      <span className="flex justify-center items-center w-fit mx-2 p-1 italic">
        {file.name}
      </span>
      <span className="hover:bg-[#64646473] duration-300 rounded-md p-[2px]">
        <CloseIcon />
      </span>
    </div>
  );
};

export default OpenedFilesBarTab;
