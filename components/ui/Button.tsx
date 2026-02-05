export const Button = ({
  children,
  onClick,
  disabled,
  styles = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  styles?: string;
}) => {
  return (
    <button
      className={
        styles
          ? styles
          : "rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
      }
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
