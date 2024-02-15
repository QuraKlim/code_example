import CiricleIcon from "@/shared/components/ciricleIcon/ciricleIcon";
import cls from "./task.module.scss";
import Check from "@/shared/icons/check.svg";
import { AnimateReveal } from "@/shared/components/animate";

interface TaskProps {
  text: string;
}

const Task = ({ text }: TaskProps) => {
  return (
    <section className={"container " + cls.task}>
      <AnimateReveal>
        <div className={cls.task_wrapper}>
          <div className={cls.task_title}>
            <p className="inline">Поставленная задача</p>
            <CiricleIcon
              image={Check}
              iconClassName={cls.icon}
              wrapperClassName={cls.icon_wrapper}
            />
          </div>
          <div>{text}</div>
        </div>
      </AnimateReveal>
    </section>
  );
};

export default Task;
