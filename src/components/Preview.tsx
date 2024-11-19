import { useSelector } from "react-redux";
import OpenedFilesBar from "./OpenedFilesBar";
import { RootState } from "../app/store";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";

const Preview = () => {
  const { clickedFile } = useSelector((state: RootState) => state.tree);
  return (
    <div>
      <OpenedFilesBar />
      <FileSyntaxHighlighter content={clickedFile.fileContent} />
    </div>
  );
};

export default Preview;
