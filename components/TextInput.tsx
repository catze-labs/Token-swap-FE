import clsx from "clsx";
import { debounce } from "lodash";
import React, { ComponentPropsWithRef } from "react";

interface TextInputProps extends ComponentPropsWithRef<"input"> {
  label?: React.ReactNode;
  loading?: boolean;
  debounced?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  loading,
  debounced,
  onChange,
  ...props
}) => {
  return (
    <div className="w-full py-2">
      {label && (
        <label className="text-sm text-gray-500 font-bold">{label}</label>
      )}
      <input
        className={clsx(
          "w-full border-2 border-gray-300 rounded p-2",
          loading && "bg-gray-500 animate-pulse"
        )}
        {...props}
        onChange={(e) => {
          if (debounced && onChange) {
            debounce(onChange, 500)(e);
          } else {
            onChange?.(e);
          }
        }}
      />
    </div>
  );
};

export default TextInput;
