import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenedFilesBarTab from "./OpenedFilesBarTab";

const OpenedFilesBar = () => {
  const { openedFiles, clickedFile } = useSelector(
    (state: RootState) => state.tree
  );
  return (
    <div className="w-full">
      <div className="flex items-center border-b border-[#232348]">
        {openedFiles.map((file) => (
          <OpenedFilesBarTab key={file.id} file={file} />
        ))}
      </div>
      {clickedFile.fileContent}
    </div>
  );
};

export default OpenedFilesBar;
