import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenedFilesAction } from "../../app/features/fileTreeSlice";
import { RootState } from "../../app/store";

interface IProps {
  setShowMenu: (val: boolean) => void;
  position: {
    x: number;
    y: number;
  };
}

const ContextMenu = ({ position: { x, y }, setShowMenu }: IProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const { openedFiles, tabIdToRemove } = useSelector(
    (state: RootState) => state.tree
  );

  // ** Handlers:
  const onCloseAllTabs = () => {
    dispatch(setOpenedFilesAction([]));
    setShowMenu(false);
  };
  const onCloseTab = () => {
    const filtered = openedFiles.filter((file) => file.id !== tabIdToRemove);
    dispatch(setOpenedFilesAction(filtered));
    setShowMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      } else {
      }
    };
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [setShowMenu]);

  return (
    <div ref={menuRef}>
      <ul
        className="bg-[#1e1e3c] text-white w-fit rounded-md"
        style={{ position: "absolute", top: y, left: x }}
      >
        <li
          className="cursor-pointer px-7 py-2 border-b hover:rounded-ss-md
          duration-300 hover:bg-[#0e0e21]"
          onClick={onCloseTab}
        >
          Close
        </li>
        <li
          className="cursor-pointer px-7 py-2 hover:rounded-md duration-300
          hover:bg-[#0e0e21]"
          onClick={onCloseAllTabs}
        >
          Close All
        </li>
      </ul>
    </div>
  );
};

export default ContextMenu;

// ** useEffect
// ** Click Event
// ** Menu Ref => useRef
