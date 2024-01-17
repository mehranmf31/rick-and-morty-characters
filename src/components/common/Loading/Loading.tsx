import classNames from "classnames";

export interface LoadingProps {
  className?: string;
}

export function Loading({ className }: LoadingProps) {
  const loadingClasses = classNames(
    "mx-auto fill-current stroke-current",
    className,
  );
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 200 200"
      className={loadingClasses}
    >
      <title>loading</title>
      <circle strokeWidth="7" r="15" cx="40" cy="100">
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="1"
          values="1;0;1;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="-.4"
        ></animate>
      </circle>
      <circle strokeWidth="7" r="15" cx="100" cy="100">
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="1"
          values="1;0;1;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="-.2"
        ></animate>
      </circle>
      <circle strokeWidth="7" r="15" cx="160" cy="100">
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="1"
          values="1;0;1;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="0"
        ></animate>
      </circle>
    </svg>
  );
}

export function LoadingWrapper() {
  return (
    <>
      <div className="w-full p-4">
        <Loading className="text-gray-500" />
      </div>
    </>
  );
}
