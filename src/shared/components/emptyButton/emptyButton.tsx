import Image from "next/image";
import cls from "./emptyButton.module.scss";
import Arrow from "@/shared/icons/ArrowIconSmallGray.svg";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

const EmptyButton = ({ onClick, text, disabled = false }: ButtonProps) => {
  return (
    <div className="w-100">
      <button
        type="button"
        disabled={disabled}
        className={cls.button}
        onClick={onClick}
      >
        <div className={"flex center " + cls.content_wrap}>
          <p>{text}</p>
          <div className="overflow-hidden">
            <div className={cls.arrows_wrap}>
              <Image src={Arrow} alt="arrow" />
              <Image src={Arrow} alt="arrow" />
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default EmptyButton;
