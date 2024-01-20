import classNames from "classnames";
import { Loading } from "@components/common";

export interface ButtonProps extends React.ComponentProps<"button"> {
  isLoading?: boolean;
}

export function Button({
  className,
  isLoading = false,
  children,
  disabled,
  ...rest
}: ButtonProps) {
  const buttonClassName = classNames(
    "bg-blue-600 text-white",
    "py-6 px-8 rounded-lg text-lg",
    "flex items-center justify-center",
    "h-9",
    {
      "pointer-events-none": !!disabled || !!isLoading,
      "bg-opacity-75": !!disabled,
    },
    className,
  );
  return (
    <button className={buttonClassName} disabled={disabled} {...rest}>
      {isLoading ? <Loading /> : children}
    </button>
  );
}
