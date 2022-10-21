import clsx from "clsx";
import { ComponentPropsWithRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface SelectProps extends ComponentPropsWithRef<"select"> {
  label?: React.ReactNode;
  options: { label: string; value: string }[];
}

const Select: React.FC<SelectProps> = ({ label, options, ...props }) => {
  return (
    <div className="py-2 relative w-full">
      {label && (
        <label className="text-sm text-gray-500 font-bold">{label}</label>
      )}
      <div className="relative">
        <select
          className={clsx([
            "w-full border-2 border-gray-300 rounded p-2",
            "appearance-none bg-white",
          ])}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute bottom-1/2 translate-y-1/2 right-2">
          <ChevronDownIcon className="w-6 text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default Select;
