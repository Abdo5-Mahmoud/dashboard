import { InputProps } from "@/types/props.type";

const Input = ({ placeholder, type, name }: InputProps) => {
  return (
    <input
      type={type || "text"}
      placeholder={placeholder}
      className="
        w-full rounded-md
        border border-gray-300 dark:border-gray-700
        bg-white dark:bg-gray-950
        px-3 py-2
        text-sm
        text-gray-900 dark:text-gray-100
        placeholder-gray-400
        focus:outline-none focus:ring-2 focus:ring-indigo-500
      "
      name={name}
    />
  );
};

export default Input;
