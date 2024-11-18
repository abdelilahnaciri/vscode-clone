import FileIcon from "./SVG/File";

interface IProps {
  name: string;
}

const FileComponent = ({ name }: IProps) => {
  return (
    <div className="flex items-center">
      <span className="mr-2">
        <FileIcon />
      </span>
      <span>{name}</span>
    </div>
  );
};

export default FileComponent;
