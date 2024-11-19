import { useEffect, useRef } from "react";

interface IProps {
  setShowMenu: (val: boolean) => void;
  position: {
    x: number;
    y: number;
  };
}

const ContextMenu = ({ position: { x, y }, setShowMenu }: IProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      console.log("handleClickOutside clicked");
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      } else {
      }
    };
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  });
  return (
    <div ref={menuRef}>
      <ul
        className="bg-white text-black w-fit px-7 py-2 rounded-md space-y-2"
        style={{ position: "absolute", top: y, left: x }}
      >
        <li>Close</li>
        <li>Close All</li>
      </ul>
    </div>
  );
};

export default ContextMenu;

// ** useEffect
// ** Click Event
// ** Menu Ref => useRef
