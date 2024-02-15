import { AnimateReveal } from "@/shared/components/animate";
import cls from "./aboutSection.module.scss";

export const AboutSection = () => {
  return (
    <section className={"container " + cls.about_section}>
      <AnimateReveal>
        <div className={cls.content_wrapper}>
          <div className="w-50">Кто мы и чем занимаемся</div>
          <div className="text big w-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            enim recusandae ullam cumque voluptatum debitis deserunt hic vero
            minus incidunt, voluptatibus obcaecati cum eius expedita id
            assumenda officia maxime laudantium.
          </div>
        </div>
      </AnimateReveal>
    </section>
  );
};

export default AboutSection;
