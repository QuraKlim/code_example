import Button from "@/shared/components/button/button";
import cls from "./partners.module.scss";
import Popup from "@/shared/components/popup/popup";

export const Partners = () => {
  return (
    <section className={"container " + cls.partners}>
      <div className="flex jcsb">
        <div className={cls.partners_texts}>
          <p>Партнёры и клиенты</p>
          <p className="text light">
            Наши клиенты и партнёры включают в себя крупные корпорации, малые и
            средние предприятия, которые доверяют нам свои проекты и бизнесы.
          </p>
        </div>
        <Popup>
          <div className="flex center">
            <Button text="Стать клиентом" />
          </div>
        </Popup>
      </div>
    </section>
  );
};

export default Partners;
