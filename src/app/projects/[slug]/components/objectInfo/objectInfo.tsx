import CiricleIcon from "@/shared/components/ciricleIcon/ciricleIcon";
import cls from "./objectInfo.module.scss";
import House from "@/shared/icons/house.svg";
import Hammer from "@/shared/icons/hammer.svg";
import { AnimateReveal } from "@/shared/components/animate";

interface ObjectInfoProps {
  date: string;
  address: string;
  jobType: string;
}

const ObjectInfo = ({ date, address, jobType }: ObjectInfoProps) => {
  return (
    <section className={"container " + cls.info}>
      <AnimateReveal>
        <div className={cls.info_content_wrapper}>
          <p className="text big">{date}</p>
          <div className={cls.info_wrapper}>
            <div className={cls.info_item}>
              <p className={cls.header}>Объект</p>
              <div className={cls.icon}>
                <CiricleIcon
                  image={House}
                  wrapperClassName={cls.icon_wrapper}
                  iconClassName={cls.icon}
                />
              </div>

              <p className={"text light " + cls.descr}>{address}</p>
            </div>
            <div className={cls.info_item}>
              <p className={cls.header}>Вид работ</p>
              <div className={cls.icon}>
                <CiricleIcon
                  image={Hammer}
                  wrapperClassName={cls.icon_wrapper}
                  iconClassName={cls.icon}
                />
              </div>

              <p className={"text light " + cls.descr}>{jobType}</p>
            </div>
          </div>
        </div>
      </AnimateReveal>
    </section>
  );
};

export default ObjectInfo;
