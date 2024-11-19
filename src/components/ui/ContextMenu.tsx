interface IProps {
  position: {
    x: number;
    y: number;
  };
}

const ContextMenu = ({ position: { x, y } }: IProps) => {
  return (
    <ul
      className="bg-white text-black w-fit px-7 py-2 rounded-md space-y-2"
      style={{ position: "absolute", top: y, left: x }}
    >
      <li>Close</li>
      <li>Close All</li>
    </ul>
  );
};

export default ContextMenu;
