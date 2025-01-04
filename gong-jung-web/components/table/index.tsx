import { ReactNode } from "react";

export const Table = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`flex flex-col text-main-900 rounded !h-fit ${className}`}>
      {children}
    </div>
  );
};

export const Row = ({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      style={style}
      className={`flex flex-1 border-b border-bg-light text-main-900 !h-fit m-0 ${className}`}
    >
      {children}
    </div>
  );
};

export const Cell = ({
  children,
  className,
  onClick,
  style,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      style={style}
      className={`flex flex-1 text-sm border-r border-bg-light justify-center p-1 !h-fit
                  overflow-hidden text-ellipsis whitespace-nowrap ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
