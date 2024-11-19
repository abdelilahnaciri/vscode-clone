import { useDispatch } from "react-redux";
import { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import { setClickedFileAction } from "../app/features/fileTreeSlice";

interface IProps {
  file: IFile;
}

const OpenedFilesBarTab = ({ file }: IProps) => {
  const dispatch = useDispatch();

  // ** Handlers:
  const onClick = () => {
    const { name, content } = file;
    dispatch(setClickedFileAction({ filename: name, fileContent: content }));
  };
  return (
    <div
      className="cursor-pointer flex items-center p-2 border-b border-[#fac525]"
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
