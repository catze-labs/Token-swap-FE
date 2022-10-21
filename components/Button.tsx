import clsx from "clsx";
import { ComponentPropsWithRef } from "react";

interface ButtonProps extends ComponentPropsWithRef<"button"> {}

const Button: React.FC<ButtonProps> = ({ className, children }) => {
  return (
    <button
      className={clsx(
        "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
