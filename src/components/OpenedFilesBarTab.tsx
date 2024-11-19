import { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";

interface IProps {
  file: IFile;
}

const OpenedFilesBarTab = ({ file }: IProps) => {
  return (
    <div className="cursor-pointer flex items-center p-2">
      <RenderFileIcon filename={file.name} />
      <span className="flex justify-center items-center w-fit mx-2 p-1">
        {file.name}
      </span>
      <span className="hover:bg-[#64646473] duration-300 rounded-md p-[2px]">
        <CloseIcon />
      </span>
    </div>
  );
};

export default OpenedFilesBarTab;
