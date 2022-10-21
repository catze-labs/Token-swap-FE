import clsx from "clsx";
import { ComponentPropsWithRef } from "react";

interface BoxProps extends ComponentPropsWithRef<"div"> {}

const Box: React.FC<BoxProps> = ({ className, children }) => {
  return (
    <div
      className={clsx(
        "border-2 border-gray-300 rounded p-6 bg-white",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Box;
