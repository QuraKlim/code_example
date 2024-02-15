import Advantages from "../advantages/advantages";
import cls from "./advantagesWrapper.module.scss";
import Team from "@/public/images/main-page/about-us/about-us-bg.jpg";

interface AdvantageWrapperProps {
  classname?: string;
}

const AdvantagesWrapper = ({ classname }: AdvantageWrapperProps) => {
  const advantages = [
    {
      head: "01",
      title: "Знаем требования сетевых организаций",
      text: "Благодаря чему мы можем заниматься эффективной проектной деятельностью",
    },
    {
      head: "02",
      title: "Высокая квалификация специалистов",
      text: "Справляемся даже с самыми сложными задачами",
    },
    {
      head: "03",
      title: "Не тратим ваше время",
      text: "Работаем со структурными подразделениями города, создаем комфортную среду по документообороту",
    },
    {
      head: "04",
      title: "Выполняем полный цикл работ",
      text: "Предлагаем дополнительные услуги по водоснабжению и теплоснабжению",
    },
  ];
  return (
    <>
      <section className={"container " + classname}>
        <div className={cls.text_wrapper}>
          <p className="text light">
            Нас выбирают, потому что в мире деловых людей мало быть просто
            экспертом в своем деле
          </p>
          <p className="text big_header">
            Мы знаем правила поведения и умеем выстраивать отношения в
            бизнес-среде
          </p>
        </div>
      </section>
      <section className={cls.big_image_wrapper}>
        <div
          className={"px-20 " + cls.big_image}
          style={{ background: `url(${Team.src}) center center/cover` }}
        ></div>
      </section>
      <section className={"container " + cls.advantages}>
        <Advantages content={advantages} />
      </section>
    </>
  );
};

export default AdvantagesWrapper;
