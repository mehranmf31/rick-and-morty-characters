import classnames from "classnames";

export interface ErrorProps {
  className?: string;
  message: string;
}

export const Error = ({ className, message }: ErrorProps): JSX.Element => {
  const errorClasses = classnames(
    "mx-auto text-center bg-red-100 p-4 rounded max-w-2xl",
    className,
  );

  return <div className={errorClasses}>{message}</div>;
};
