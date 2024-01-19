import React from "react";
import classnames from "classnames";

interface PageWrapperProps {
  className?: string;
  children: React.ReactNode;
}

export function PageWrapper({ className, children }: PageWrapperProps) {
  return (
    <div className={classnames("container mx-auto pt-16 px-5", className)}>
      {children}
    </div>
  );
}
