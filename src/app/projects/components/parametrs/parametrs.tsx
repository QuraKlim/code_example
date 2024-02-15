import { FilterCategories } from "@/app/blog/(components)/filterCategories/FilterCategories";
import cls from "./parametr.module.scss";
import { AnimateReveal } from "@/shared/components/animate";

interface ParametrsProps {
  parametrs?: string[];
  setPickedParametrs?: (parametrs: string[]) => void;
  choosenParametrs?: string[];
}

const Parametrs = ({ parametrs, setPickedParametrs }: ParametrsProps) => {
  return (
    <section className={"container " + cls.parametrs_wrap}>
      <AnimateReveal>
        <div className={cls.parametrs}>
          <p className="text big">
            Выберите, интересующие Вас, категории проектов в фильтре
          </p>
          <FilterCategories
            setPickedParametrs={setPickedParametrs}
            filters={parametrs}
          />
        </div>
      </AnimateReveal>
    </section>
  );
};

export default Parametrs;
