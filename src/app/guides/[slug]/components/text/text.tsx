import cls from "./text.module.scss";

const Text = () => {
  return (
    <section className={"container " + cls.guide_section}>
      <div className={cls.guide_text}>
        <p className={cls.guide_text_header}>Заголовок</p>
        <div>
          <p className={"text big " + cls.guide_text_paragraph}>
            Lorem ipsum dolor sit amet consectetur. Aliquam tincidunt amet amet
            purus congue curabitur sit ultrices. Pellentesque luctus a quam
            nulla eget nullam nulla leo pellentesque. Nulla ac aliquet integer
            est. Eget interdum nullam dui ipsum consectetur.
          </p>
          <br />
          <p className={"text big " + cls.guide_text_paragraph}>
            Lorem ipsum dolor sit amet consectetur. Aliquam tincidunt amet amet
            purus congue curabitur sit ultrices. Pellentesque luctus a quam
            nulla eget nullam nulla leo pellentesque. Nulla ac aliquet integer
            est. Eget interdum nullam dui ipsum consectetur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Text;
