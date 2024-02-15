import Image from "next/image";
import styles from "./IconComponent.module.scss";
import React from "react";

interface IconComponentProps {
  width: number;
  height: number;
  src: string;
  className?: string;
  round?: boolean;
  onClick?: React.MouseEventHandler<HTMLImageElement> | undefined;
}

const IconComponent: React.FC<IconComponentProps> = ({
  width,
  height,
  src,
  className,
  onClick,
  round = false,
}) => {
  return (
    <div
      style={round ? {} : { width: width, height: height }}
      className={round ? styles.wrapper : ""}
    >
      <Image
        onClick={onClick}
        className={className}
        src={src}
        width={width}
        height={height}
        alt="icon"
      />
    </div>
  );
};

export default IconComponent;
