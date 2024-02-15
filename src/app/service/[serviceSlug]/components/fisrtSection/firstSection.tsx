import Image from "next/image";
import cls from "./firstSection.module.scss";
import { AnimateReveal } from "@/shared/components/animate";

interface FirstSectionProps {
  header: string;
  description: string;
  image: string;
}

const FirstSection = ({ header, description, image }: FirstSectionProps) => {
  return (
    <section className={"container " + cls.section}>
      <AnimateReveal>
        <div className={cls.section_content}>
          <div className={cls.section_text}>
            <p>{header}</p>
            <p className="text big">{description}</p>
          </div>
          <div className={cls.section_image + " flex center"}>
            <Image src={image} alt="socket" width={300} height={400} />
          </div>
        </div>
      </AnimateReveal>
    </section>
  );
};

export default FirstSection;
