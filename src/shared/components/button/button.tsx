"use client";

import Image from "next/image";
import cls from "./button.module.scss";
import Arrow from "@/shared/icons/arrow.svg";
import WhiteArrow from "@/shared/icons/whiteArrow.svg";

export enum ButtonType {
  BUTTON = "button",
  SUBMIT = "submit",
}

export enum ButtonColor {
  YELLOW = "yellow",
  DARK = "dark",
}

export enum TextColor {
  BLACK = "black",
  WHITE = "white",
}

interface ButtonProps {
  type?: ButtonType;
  onClick?: Function;
  text: string;
  color?: ButtonColor;
  textColor?: TextColor;
  whiteTextOnMobile?: boolean;
}

const Button = ({
  type = ButtonType.BUTTON,
  onClick,
  text,
  color = ButtonColor.YELLOW,
  textColor = TextColor.BLACK,
  whiteTextOnMobile = false,
}: ButtonProps) => {
  return (
    <button
      onClick={(e) => {
        if (onClick) {
          if (type !== ButtonType.SUBMIT) {
            e.preventDefault();
          } else {
            onClick();
          }
        }
      }}
      className={`${cls.wrapper} ${cls[color]}`}
      type={type}
    >
      <div
        style={{ color: textColor }}
        className={`${cls.text} ${whiteTextOnMobile ? cls.white_mobile : ""}`}
      >
        {text}
      </div>
      <div className={cls.arrow_wrap}>
        <div className={cls.icon}>
          <Image
            src={color == ButtonColor.DARK ? WhiteArrow : Arrow}
            alt="arrow"
            width={24}
            height={24}
          />
          <Image
            src={color == ButtonColor.DARK ? WhiteArrow : Arrow}
            alt="arrow"
            width={24}
            height={24}
          />
        </div>
        <div className={cls.background}></div>
      </div>
    </button>
  );
};

export default Button;
