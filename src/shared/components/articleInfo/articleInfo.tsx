import cls from "@/app/projects/[slug]/components/objectInfo/objectInfo.module.scss";
import Person from "@/shared/icons/person.svg";
import CiricleIcon from "../ciricleIcon/ciricleIcon";
import { AnimateReveal } from "../animate";

interface ArticleInfoProps {
  date: string;
  timeToRead: string;
}

const ArticleInfo = ({ date, timeToRead }: ArticleInfoProps) => {
  return (
    <section className={"container " + cls.info}>
      <AnimateReveal>
        <div className={cls.info_content_wrapper}>
          <p className="text big">{date}</p>
          <div className={cls.info_wrapper + " " + cls.alt}>
            <div className={cls.info_item}>
              <p className={cls.header}>Читать </p>
              <div className={cls.icon}>
                <CiricleIcon
                  image={Person}
                  wrapperClassName={cls.icon_wrapper}
                  iconClassName={cls.icon}
                />
              </div>
              <p className={"text light " + cls.descr}>{timeToRead}</p>
            </div>
          </div>
        </div>
      </AnimateReveal>
    </section>
  );
};

export default ArticleInfo;
