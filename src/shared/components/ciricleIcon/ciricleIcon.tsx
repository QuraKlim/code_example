import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import cls from "./ciricleIcon.module.scss";

interface CiricleIconProps {
  image: string | StaticImport;
  wrapperClassName: string;
  iconClassName: string;
  [key: string]: any;
}

const CiricleIcon = ({
  image,
  wrapperClassName,
  iconClassName,
  ...props
}: CiricleIconProps) => {
  return (
    <div className={`${cls.icon_wrapper} ${wrapperClassName}`} {...props}>
      <Image
        src={image}
        alt="ciricle_icon"
        className={`${cls.icon} ${iconClassName}`}
      />
    </div>
  );
};

export default CiricleIcon;
