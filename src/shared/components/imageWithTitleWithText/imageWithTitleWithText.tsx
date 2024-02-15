import cls from "./imageWithTitleWithText.module.scss";
import Image from "next/image";
import Building from "@/public/images/guide/building.jpg";

const ImageWithTitleWithText = () => {
  return (
    <div className={cls.section}>
      <div className={cls.section_image}>
        <Image src={Building} alt="building" />
      </div>
      <p className={cls.section_title}>Заголовок</p>
      <p className={"text big " + cls.section_text}>
        Lorem ipsum dolor sit amet consectetur. Aliquam tincidunt amet amet
        purus congue curabitur sit ultrices. Pellentesque luctus a quam nulla
        eget nullam nulla leo pellentesque. Nulla ac aliquet integer est. Eget
        interdum nullam dui ipsum consectetur.
      </p>
    </div>
  );
};

export default ImageWithTitleWithText;
