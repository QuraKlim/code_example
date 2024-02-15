import Image from "next/image";
import styles from "./SecondArticle.module.scss";
import clsx from "clsx";
import { UploadFileEntityResponse } from "@/data/generated/graphql";
import { AnimateReveal } from "@/shared/components/animate";

export interface ISecondArticle {
  title: string;
  description: string;
  image: UploadFileEntityResponse;
}

export const SecondArticle = ({
  title,
  description,
  image,
}: ISecondArticle) => {
  return (
    <section className={styles.container}>
      <AnimateReveal>
        <div className={styles.second_article}>
          <p className={styles.title_mobile}>{title}</p>
          <div className={styles.article_body2}>
            <div className={styles.article_img2}>
              <div className={styles.img_wrapper2}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.data.attributes.url}`}
                  alt="article-image"
                  fill
                />
              </div>
            </div>
            <div className={styles.article_text2}>
              <p className={clsx("text regular", styles.title)}>{title}</p>
              <p className={clsx("text big", styles.text)}>{description}</p>
            </div>
          </div>
        </div>
      </AnimateReveal>
    </section>
  );
};
