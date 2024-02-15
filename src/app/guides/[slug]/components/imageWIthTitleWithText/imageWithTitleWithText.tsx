import cls from "./imageWithTitleWithText.module.scss";
import ImageWithTitleWithText from "@/shared/components/imageWithTitleWithText/imageWithTitleWithText";

const ImageWithTitleWithTextSection = () => {
  return (
    <section className={"container " + cls.text_with_image}>
      <ImageWithTitleWithText />
    </section>
  );
};

export default ImageWithTitleWithTextSection;
