import { useDispatch, useSelector } from "react-redux";
import { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import {
  setClickedFileAction,
  setOpenedFilesAction,
} from "../app/features/fileTreeSlice";
import { RootState } from "../app/store";

interface IProps {
  file: IFile;
}

const OpenedFilesBarTab = ({ file }: IProps) => {
  const {
    openedFiles,
    clickedFile: { activeTabId },
  } = useSelector((state: RootState) => state.tree);
  const dispatch = useDispatch();

  // ** Handlers:
  const onClick = () => {
    const { id, name, content } = file;
    dispatch(
      setClickedFileAction({
        activeTabId: id,
        filename: name,
        fileContent: content,
      })
    );
  };
  const onRemove = (selectedId: string) => {
    const filtered = openedFiles.filter((file) => file.id !== selectedId);
    const { id, name, content } =
      filtered.length > 0
        ? filtered[filtered.length - 1]
        : { id: "", name: "", content: "" };
    // console.log(filtered);
    dispatch(setOpenedFilesAction(filtered));
    dispatch(
      setClickedFileAction({
        activeTabId: id,
        filename: name,
        fileContent: content,
      })
    );
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
      <span
        className="hover:bg-[#64646473] duration-300 rounded-md p-[2px]"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(file.id);
        }}
      >
        <CloseIcon />
      </span>
    </div>
  );
};

export default OpenedFilesBarTab;
