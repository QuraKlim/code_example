import { AnimateReveal } from "../animate";
import Button from "../button/button";
import Popup from "../popup/popup";
import cls from "./advantages.module.scss";
import { ReactNode } from "react";

interface Advantage {
  head: ReactNode;
  title: string | ReactNode;
  text: string | ReactNode;
}

interface AdvantagesProps {
  content: Advantage[];
}

const Advantages = ({ content }: AdvantagesProps) => {
  return (
    <>
      <AnimateReveal willChangeDisable>
        <div className={cls.title_wrap}>
          <div>
            <p className="text big_header bold">Остались вопросы?</p>
            <p className="text big_header bold">Давайте обсудим вместе!</p>
          </div>
          <Popup >
            <Button text="Стать клиентом" />
          </Popup>
        </div>
      </AnimateReveal>
      <AnimateReveal>
        <div className={cls.advantages}>
          <div className={cls.advantages_wrapper}>
            {content.map((i, index) => (
              <div key={index} className={cls.advantages_item}>
                {i.head}
                <hr className={cls.advantages_line} />

                <div>
                  <p>{i.title}</p>
                  <p className={"text light " + cls.advantages_description}>
                    {i.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimateReveal>
    </>
  );
};

export default Advantages;
