import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { useState } from "react";
import OpenedFilesBarTab from "./OpenedFilesBarTab";
import ContextMenu from "./ui/ContextMenu";

const OpenedFilesBar = () => {
  const [menuPos, setMeuPos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const { openedFiles } = useSelector((state: RootState) => state.tree);

  return (
    <div className="w-full">
      <div
        className="flex items-center border-b border-[#232348]"
        onContextMenu={(e) => {
          e.preventDefault();
          setMeuPos({ x: e.clientX, y: e.clientY });
          setShowMenu(true);
          // console.log(e.clientX, e.clientY);
        }}
      >
        {openedFiles.map((file) => (
          <OpenedFilesBarTab key={file.id} file={file} />
        ))}
      </div>
      {showMenu && <ContextMenu position={menuPos} setShowMenu={setShowMenu} />}
    </div>
  );
};

export default OpenedFilesBar;
