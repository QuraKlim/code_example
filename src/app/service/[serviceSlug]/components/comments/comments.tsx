import Button from "@/shared/components/button/button";
import cls from "./comments.module.scss";
import Face from "@/public/images/services/face.png";
import Image from "next/image";
import { dateToString } from "@/shared/utils/dateToString";
import EmptyButton from "@/shared/components/emptyButton/emptyButton";
import { AnimateReveal } from "@/shared/components/animate";

const Comments = () => {
  const commentsList = [
    {
      name: "Иван Иванович",
      organization: "ООО “Название Организации”",
      date: "2024-01-23T08:02:36.990Z",
      text: "Очень доволен работой «Первой энергетической компании». Специалисты компании провели проект по увеличению электрической мощности на высоком уровне.",
      gratefullLetter: "asfdasfasd",
    },
    {
      name: "Иван Иванович",
      organization: "ООО “Название Организации”",
      date: "2024-01-23T08:02:36.990Z",
      text: "Очень доволен работой «Первой энергетической компании». Специалисты компании провели проект по увеличению электрической мощности на высоком уровне.",
      gratefullLetter: "asfdasfasd",
    },
    {
      name: "Иван Иванович",
      organization: "ООО “Название Организации”",
      date: "2024-01-23T08:02:36.990Z",
      text: "Очень доволен работой «Первой энергетической компании». Специалисты компании провели проект по увеличению электрической мощности на высоком уровне.",
      gratefullLetter: "asfdasfasd",
    },
  ];
  return (
    <section className={"container " + cls.comment_section}>
      <AnimateReveal>
        <div className={cls.header_wrap}>
          <p className="text big_header">Убедились в качестве</p>
          <div className="flex aic">
            <Button text="Наши услуги" />
          </div>
        </div>
      </AnimateReveal>
      <div className={cls.comments_wrap}>
        {commentsList.map((i, index) => (
          <AnimateReveal>
            <div key={index}>
              <div className={cls.comment_wrapper}>
                <div className={"flex aic gap_15 " + cls.comment_person}>
                  <Image src={Face} width={63} height={63} alt="person" />
                  <div className={cls.comment_person_info}>
                    <p>{i.name}</p>
                    <p className="text light">{i.organization}</p>
                  </div>
                </div>
                <div className={cls.comment}>
                  <div className={cls.comment_with_date}>
                    <p className="text light">{dateToString(i.date)}</p>
                    <p className={cls.comment_text}>{i.text}</p>
                  </div>
                  <div className={cls.comment_link_wrap}>
                    <div className={cls.comment_link}>
                      <EmptyButton text="Благодарственное письмо" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateReveal>
        ))}
      </div>
    </section>
  );
};

export default Comments;
