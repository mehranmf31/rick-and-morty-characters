import classNames from "classnames";
import { Loading } from "@components/common";

export interface ButtonProps extends React.ComponentProps<"button"> {
  isLoading?: boolean;
}

export function Button({
  className,
  isLoading = false,
  children,
  ...rest
}: ButtonProps) {
  const buttonClassName = classNames(
    "bg-blue-600 text-white",
    "px-3 py-2 rounded-lg text-sm",
    "flex items-center justify-center",
    "min-w-24 h-9",
    className,
  );
  return (
    <button className={buttonClassName} {...rest}>
      {isLoading ? <Loading /> : children}
    </button>
  );
}
