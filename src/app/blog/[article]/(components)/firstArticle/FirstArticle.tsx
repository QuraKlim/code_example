import { AnimateReveal } from "@/shared/components/animate";
import styles from "./FirstArticle.module.scss";

interface IFirstArticleProps {
  header: string;
  Descr: string;
}

export const FirstArticle = ({ header, Descr }: IFirstArticleProps) => {
  return (
    <section className={styles.container}>
      <AnimateReveal>
        <div className={styles.first_article}>
          <div className={styles.article_body}>
            <div className={styles.article_title}>
              <p className="text regular">{header}</p>
            </div>
            <div className={styles.article_text}>
              <p className="text big">{Descr}</p>
            </div>
          </div>
        </div>
      </AnimateReveal>
    </section>
  );
};
