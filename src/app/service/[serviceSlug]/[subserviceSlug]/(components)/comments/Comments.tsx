import btnIcon from "@/shared/icons/gray-arrow-small.svg";
import Link from "next/link";
import styles from "./Comments.module.scss";
import IconComponent from "@/shared/components/iconComponent/IconComponent";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import { AnimateReveal } from "@/shared/components/animate";

interface IComments {
  head: {
    icon: StaticImageData;
    name: string;
    company: string;
  };
  body: {
    text: string;
    date: string;
  };
}

interface ICommentsProps {
  comments: IComments[];
}

const Comments = ({ comments }: ICommentsProps) => {
  return (
    <div className={styles.wrapper}>
      {comments.length &&
        comments.map((el, index) => (
          <AnimateReveal>
            <div
              key={index}
              style={{
                borderBottom:
                  index === comments.length - 1 ? "" : "1px solid #1c1c2233;",
              }}
              className={styles.el_wrap}
            >
              <div className={styles.el_head}>
                <Image src={el.head.icon} alt="0" height={63} width={63} />
                <div className={styles.credentials}>
                  <p className="text regular">{el.head.name}</p>
                  <p className="text regular light">{el.head.company}</p>
                </div>
              </div>
              <div>
                <div className={styles.el_body}>
                  <p className="text regular light">{el.body.date}</p>
                  <p className={clsx("text regular", styles.wrap_truncate)}>
                    {el.body.text}
                  </p>
                </div>
                <div className={styles.btn_wrap}>
                  <button className={styles.btn}>
                    <p className="text regular">
                      <Link className="link" href={"#"}>
                        Благодарственное письмо
                      </Link>
                    </p>
                    <Image
                      src={btnIcon}
                      className={styles.arr_1}
                      width={24}
                      height={24}
                      alt="icon"
                    />
                  </button>
                </div>
              </div>
            </div>
          </AnimateReveal>
        ))}
    </div>
  );
};

export default Comments;
