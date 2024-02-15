import Image from "next/image";
import cls from "./button.module.scss";
import Arrow from "@/shared/icons/ArrowIconSmallGray.svg";

interface ButtonProps {
  onClick?: () => void;
}

const Button = ({ onClick }: ButtonProps) => {
  return (
    <section className={"container " + cls.button_wrap}>
      <div className="w-100">
        <button type="button" className={cls.button} onClick={onClick}>
          <div className={"flex center " + cls.content_wrap}>
            <p>Загрузить еще</p>
            <div className="overflow-hidden">
              <div className={cls.arrows_wrap}>
                <Image src={Arrow} alt="arrow" />
                <Image src={Arrow} alt="arrow" />
              </div>
            </div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Button;
