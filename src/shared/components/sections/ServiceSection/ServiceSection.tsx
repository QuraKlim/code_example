import ServicesList from "@/shared/components/MainPageCommonComponents/servicesList/ServicesList";
import styles from "./ServiceSection.module.scss";
import { AnimateReveal } from "@/shared/components/animate";

const ServiceSection = () => {
  return (
    <section className={styles.service_section}>
      <AnimateReveal>
        <div className={styles.service_titles}>
          <h3 className={"text regular"}>Наши услуги</h3>
          <h4 className={styles.local + " text big_header"}>
            Мы предоставляем услуги в нескольких сферах
          </h4>
        </div>
      </AnimateReveal>
      <AnimateReveal>
        <ServicesList />
      </AnimateReveal>
    </section>
  );
};

export default ServiceSection;
