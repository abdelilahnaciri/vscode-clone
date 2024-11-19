import { IFile } from "../interfaces";
import { v4 as uuid } from "uuid";

export const fileTree: IFile = {
  id: uuid(),
  name: "VS Code Clone",
  isFolder: true,
  children: [
    {
      id: uuid(),
      name: "node_modules",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: ".vite",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "react.js",
              isFolder: false,
              content: `function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);`,
            },
          ],
        },
      ],
    },
    {
      id: uuid(),
      name: "public",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "index.html",
          isFolder: false,
          content: `<!DOCTYPE html>
<html>
  <head>
    <title>Hello, World!</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
      <h1 class="title">Hello World! </h1>
      <p id="currentTime"></p>
      <script src="script.js"></script>
  </body>
</html>`,
        },
      ],
    },
    {
      id: uuid(),
      name: "src",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "components",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "Button.tsx",
              isFolder: false,
              content: `import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...rest }: IProps) => {
  return (
    <button
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;`,
            },
            {
              id: uuid(),
              name: "Button.tsx",
              isFolder: false,
              content: `import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}

const Button = ({ children, className, width = "w-full", ...rest }: IProps) => {
  // console.log({ rest });
  return (
    <button
      className={\`\${className} \${width} rounded-lg text-white px-3 py-3 duration-200 font-medium\`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;`,
            },
          ],
        },
      ],
    },
  ],
};
