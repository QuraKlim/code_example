import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import cls from "./ciricleIcon.module.scss";

interface CiricleIconTurnProps {
  image: string | StaticImport;
  wrapperClassName: string;
  iconClassName: string;
  isHovered: boolean;
  [key: string]: any;
}

const CiricleIconTurn = ({
  image,
  wrapperClassName,
  iconClassName,
  isHovered = false,
  ...props
}: CiricleIconTurnProps) => {
  return (
    <div
      className={`${cls.icon_wrapper_turn} ${
        isHovered ? cls.hovered : ""
      } ${wrapperClassName} `}
      {...props}
    >
      <div className={cls.window}>
        <div className={cls.icons}>
          <Image
            src={image}
            alt="ciricle_icon"
            className={`${cls.icon} ${iconClassName}`}
          />
          <Image
            src={image}
            alt="ciricle_icon"
            className={`${cls.icon} ${iconClassName}`}
          />
        </div>
      </div>
    </div>
  );
};

export default CiricleIconTurn;
