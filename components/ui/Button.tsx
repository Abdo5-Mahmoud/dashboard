import { ButtonProps } from "@/types/props.type";

export const Button = ({
  children,
  onClick,
  disabled,
  styles = "",
  type,
}: ButtonProps) => {
  return (
    <button
      type={type || "button"}
      className={`        ${
        styles
          ? styles
          : "rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
      }
       cursor-pointer`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
