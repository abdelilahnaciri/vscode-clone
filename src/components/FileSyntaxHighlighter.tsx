import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface IProps {
  content: string | undefined;
}

const FileSyntaxHighlighter = ({ content }: IProps) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={dracula}
      customStyle={{
        backgroundColor: "transparent",
        height: "calc(100vh - 50px)",
      }}
      showLineNumbers
    >
      {String(content ? content : "")}
    </SyntaxHighlighter>
  );
};

export default FileSyntaxHighlighter;
